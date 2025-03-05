"use client";
import React, { useEffect, useState } from "react";
import { db, auth } from "@/api/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, User } from "firebase/auth";
import ItemCard from "@/components/Inventory/ItemCard";
import AddItemButton from "@/components/Inventory/AddItemButton";
import AddItemModal from "@/components/Inventory/AddItemModal";
import { Item } from "@/types/Item";
import "@/app/styles/inventory-styles/styles.css";

const Inventory = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await fetchInventory(currentUser.uid);
      } else {
        setItems([]);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchInventory = async (userId: string) => {
    try {
      setLoading(true);
      const inventoryRef = doc(db, "inventories", userId);
      const inventorySnap = await getDoc(inventoryRef);

      if (!inventorySnap.exists()) {
        await setDoc(inventoryRef, { userId, items: [] });
        console.log("Created new inventory for user:", userId);
        setItems([]);
      } else {
        const data = inventorySnap.data();
        setItems(data.items || []);
      }
    } catch (error) {
      console.error("Error fetching inventory:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = async (newItem: Item) => {
    if (!user) return;

    try {
      const inventoryRef = doc(db, "inventories", user.uid);
      const updatedItems = [...items, newItem];

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

            <div className="add-item-button-wrapper">
              <AddItemButton onClick={() => setModalOpen(true)} />
            </div>
          </div>
        )}
      </div>

      {modalOpen && (
        <AddItemModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onAddItem={handleAddItem}
        />
      )}
    </div>
  );
};

export default Inventory;
