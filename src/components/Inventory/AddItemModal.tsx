import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Item {
 name: string;
 description: string;
 image: string;
 userId: string;
}

interface AddItemModalProps {
 open: boolean;
 onClose: () => void;
 onAddItem: (newItem: Item) => void;
}

const AddItemModal: React.FC<AddItemModalProps> = ({ open, onClose, onAddItem }) => {
 const [name, setName] = useState("");
 const [description, setDescription] = useState("");
 const [image, setImage] = useState("");

 const handleSubmit = () => {
  if (!name || !description || !image) return;

  const newItem: Item = {
   name,
   description,
   image,
   userId: "TEMP_USER_ID",
  };

  onAddItem(newItem);
  onClose();
  setName("");
  setDescription("");
  setImage("");
 };

 return (
  <Modal open={open} onClose={onClose} sx={{ backdropFilter: "blur(8px)" }}>
   <Box
    sx={{
     width: 450,
     p: 4,
     bgcolor: "white",
     mx: "auto",
     mt: "15vh",
     borderRadius: "10px",
     border: "3px solid #888888",
     boxShadow: "0 8px 12px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.3)",
     backgroundColor: "rgba(26, 26, 26, 0.6)",
     color: "white",
     position: "relative",
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
    }}
   >
    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" mb={2}>
     <h2 style={{ margin: 0, textAlign: "center", flexGrow: 1 }}>Add New Item</h2>
     <CloseIcon
      onClick={onClose}
      sx={{
       transition: "transform 0.2s ease-in-out",
       cursor: "pointer",
       "&:hover": { transform: "scale(1.2)", color: "#bbbbbb" },
      }}
     />
    </Box>

    {[{ label: "Name", value: name, setter: setName }, { label: "Description", value: description, setter: setDescription }, { label: "Image URL", value: image, setter: setImage }].map((field) => (
     <input
      key={field.label}
      type="text"
      placeholder={field.label}
      value={field.value}
      onChange={(e) => field.setter(e.target.value)}
      style={{
       width: "100%",
       padding: "10px",
       margin: "8px 0",
       borderRadius: "5px",
       border: "2px solid #888888",
       backgroundColor: "transparent",
       color: "white",
       outline: "none",
       textAlign: "center",
       fontSize: "16px",
       transition: "all 0.3s ease-in-out",
      }}
      onFocus={(e) => {
       e.currentTarget.style.borderColor = "#ffffff";
       e.currentTarget.style.boxShadow = "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff";
      }}
      onBlur={(e) => {
       e.currentTarget.style.borderColor = "#888888";
       e.currentTarget.style.boxShadow = "none";
      }}
      onMouseOver={(e) => {
       e.currentTarget.style.borderColor = "#ffffff";
       e.currentTarget.style.boxShadow = "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff";
      }}
      onMouseOut={(e) => {
       e.currentTarget.style.borderColor = "#888888";
       e.currentTarget.style.boxShadow = "none";
      }}
     />
    ))}

    <button
     onClick={handleSubmit}
     style={{
      width: "100%",
      marginTop: "16px",
      padding: "10px",
      borderRadius: "5px",
      transition: "all 0.3s ease-in-out",
      boxShadow: "0 0 5px rgba(136, 136, 136, 0.5)",
      textTransform: "uppercase",
      backgroundColor: "transparent",
      color: "#888888",
      border: "2px solid #888888",
      cursor: "pointer",
      fontSize: "16px",
     }}
     onMouseOver={(e) => {
      e.currentTarget.style.backgroundColor = "rgba(136, 136, 136, 0.1)";
      e.currentTarget.style.boxShadow = "0 0 10px #888888, 0 0 20px #888888, 0 0 30px #888888";
     }}
     onMouseOut={(e) => {
      e.currentTarget.style.backgroundColor = "transparent";
      e.currentTarget.style.boxShadow = "0 0 5px rgba(136, 136, 136, 0.5)";
     }}
    >
     Add Item
    </button>
   </Box>
  </Modal>
 );
};

export default AddItemModal;
