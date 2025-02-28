import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

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
      userId: "TEMP_USER_ID", // В реальном коде заменяем на auth.currentUser?.uid
    };

    onAddItem(newItem); // Вызываем переданную функцию
    onClose(); // Закрываем модалку
    setName("");
    setDescription("");
    setImage("");
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: 400, p: 3, bgcolor: "white", mx: "auto", mt: "20vh", borderRadius: 2 }}>
        <h2>Add New Item</h2>
        <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} margin="normal" />
        <TextField fullWidth label="Description" value={description} onChange={(e) => setDescription(e.target.value)} margin="normal" />
        <TextField fullWidth label="Image URL" value={image} onChange={(e) => setImage(e.target.value)} margin="normal" />
        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} sx={{ mt: 2 }}>
          Add Item
        </Button>
      </Box>
    </Modal>
  );
};

export default AddItemModal;
