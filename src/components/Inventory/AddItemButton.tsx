import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface AddItemButtonProps {
  onClick: () => void;
}

const AddItemButton: React.FC<AddItemButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
    >
      <AddIcon sx={{ fontSize: 60 }} />
      Add Item
    </Button>
  );
};

export default AddItemButton;
