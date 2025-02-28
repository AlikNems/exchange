import React from "react";

interface AddItemButtonProps {
  onClick: () => void;
}

const AddItemButton: React.FC<AddItemButtonProps> = ({ onClick }) => {
 return (
   <button className="add-item-button" onClick={onClick}>
     + Add Item
   </button>
 );
};


export default AddItemButton;
