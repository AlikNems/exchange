"use client";
import React, { useEffect, useState } from "react";
import { db, auth } from "@/api/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import ItemCard from "@/components/Inventory/ItemCard";
import AddItemButton from "@/components/Inventory/AddItemButton";
import AddItemModal from "@/components/Inventory/AddItemModal";
import "@/app/styles/inventory-styles/styles.css";

interface Item {
  name: string;
  description: string;
  image: string;
  userId: string;
}

const Inventory = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchInventory = async () => {
      const user = auth.currentUser;
      if (!user) {
        console.warn("User is not authenticated");
        setLoading(false);
        return;
      }

      const inventoryRef = doc(db, "inventories", user.uid);
      const inventorySnap = await getDoc(inventoryRef);

      if (!inventorySnap.exists()) {
        await setDoc(inventoryRef, { userId: user.uid, items: [] });
        console.log("Created new inventory for user:", user.uid);
      } else {
        console.log("Found inventory:", inventorySnap.data());
        setItems(inventorySnap.data().items || []);
      }

      setLoading(false);
    };

    fetchInventory();
  }, []);

  const handleAddItem = async (newItem: Item) => {
    const user = auth.currentUser;
    if (!user) return;

    const inventoryRef = doc(db, "inventories", user.uid);
    const updatedItems = [...items, newItem];

    try {
      await updateDoc(inventoryRef, { items: updatedItems });
      setItems(updatedItems);
    } catch (error) {
      console.error("Failed to update inventory:", error);
    }
  };

  return (
    <div className="content-block">
      <div className="inventory-box">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="inventory-grid">
            {items.map((item, index) => (
              <ItemCard key={index} item={item} />
            ))}

            {/* Кнопка добавления теперь внутри грида */}
            <div className="add-item-button-wrapper">
              <AddItemButton onClick={() => setModalOpen(true)} />
            </div>
          </div>
        )}
      </div>

      <AddItemModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddItem={handleAddItem}
      />
    </div>
  );
};

export default Inventory;
