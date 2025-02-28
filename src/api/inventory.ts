export interface InventoryItem {
 id: string;
 name: string;
}

export interface Inventory {
 items: InventoryItem[];
 userId: string;
}

export const addItemToInventory = (inventory: Inventory, itemName: string): Inventory => {
 const newItem: InventoryItem = {
   id: Date.now().toString(),
   name: itemName,
 };
 return {
   ...inventory,
   items: [...inventory.items, newItem],
 };
};
