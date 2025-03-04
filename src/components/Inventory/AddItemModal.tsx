import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Item } from "@/types/Item";

interface AddItemModalProps {
  open: boolean;
  onClose: () => void;
  onAddItem: (newItem: Item) => void;
}

const AddItemModal: React.FC<AddItemModalProps> = ({ open, onClose, onAddItem }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [size, setSize] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [image, setImage] = useState<string>("");

  const handleSubmit = async () => {
    if (!name || !description || !weight || !size || !photo) {
      alert("Please fill in all fields and upload a photo");
      return;
    }

    // Здесь вы можете добавить логику загрузки файла, если нужно
    const newItem: Item = {
      name,
      description,
      image,  // URL изображения
      userId: "TEMP_USER_ID",
      weight: parseFloat(weight),
      size
    };

    onAddItem(newItem);
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setWeight("");
    setSize("");
    setPhoto(null);
    setImage("");
    const fileInput = document.getElementById("photo") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      // Проверка типа файла
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a valid image file (JPEG, PNG, GIF)');
        return;
      }

      // Проверка размера файла (например, не более 5 МБ)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5 MB');
        return;
      }

      setPhoto(file);
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <Modal open={open} onClose={onClose} sx={{ backdropFilter: "blur(8px)" }}>
      <Box className="modal-container">
        <CloseIcon onClick={onClose} className="close-icon" />
        <Box className="modal-header">
          <h2 className="modal-title">Add New Item</h2>
        </Box>

        {[
          { label: "Name", value: name, setter: setName },
          { label: "Description", value: description, setter: setDescription },
          { label: "Weight (kg)", value: weight, setter: setWeight },
          { label: "Size (cm)", value: size, setter: setSize }
        ].map((field) => (
          <input
            key={field.label}
            type={field.label === "Weight (kg)" || field.label === "Size (cm)" ? "number" : "text"}
            placeholder={field.label}
            value={field.value}
            onChange={(e) => field.setter(e.target.value)}
            className="inventory-input"
            required
          />
        ))}

        <div className="upload-photo">
          <label htmlFor="photo">Upload Photo</label>
          <input
            id="photo"
            type="file"
            accept="image/jpeg,image/png,image/gif"
            onChange={handleFileChange}
            className="inventory-input"
            required
          />
       {image && (
  <div className="photo-preview">
    <img
      src={image}
      alt="Preview"
      style={{
        maxWidth: "100%",
        maxHeight: "100px", // Уменьшил высоту с 200px до 100px
        objectFit: 'cover',
        borderRadius: '8px', // Добавил скругление углов для эстетики
        marginTop: '8px' // Добавил небольший отступ сверху
      }}
    />
    <button type="button" onClick={() => {
      setPhoto(null);
      setImage("");
    }}>Remove</button>
  </div>
)}
        </div>

        <button
          className="add-item-modal-button"
          onClick={handleSubmit}
        >
          Add item
        </button>
      </Box>
    </Modal>
  );
};

export default AddItemModal;
