"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore"; // Изменяем getDocs → getDoc
import ItemCard from "@/components/ItemCard";
import "@/app/styles/inventory-styles/styles.css";

interface Item {
  name: string;
  description: string;
  image: string;
  userId: string;
}

const Inventory = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const inventoryRef = doc(db, "inventories", "G2uPiPN0HwU66k7N3lPx");
        const docSnap = await getDoc(inventoryRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (Array.isArray(data.items)) {
            setItems(data.items);
          } else {
            console.warn("items is not an array in Firestore.");
          }
        } else {
          console.warn("No such document!");
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="content-block">
      <div className="inventory-box">
        <div className="inventory-grid">
          {items.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
