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
      variant="outlined"
      sx={{
        marginTop:"17px",
        width: 245,
        height: 170,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "2px dashed rgba(255, 255, 255, 0.3)",
        borderRadius: 2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        transition: "transform 0.2s, background-color 0.2s",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          transform: "scale(1.05)",
        },
      }}
    >
      <AddIcon sx={{ fontSize: 60 }} />
      Add Item
    </Button>
  );
};

export default AddItemButton;
