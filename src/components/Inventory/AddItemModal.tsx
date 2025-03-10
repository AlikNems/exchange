import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Item, blobToBase64 } from "@/types/Item";

interface AddItemModalProps {
  open: boolean;
  onClose: () => void;
  onAddItem: (newItem: Item) => void;
}

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

// Переиспользуемый компонент для инпутов
const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  value,
  onChange,
  required = true
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="inventory-input"
      required={required}
    />
  );
};

const AddItemModal: React.FC<AddItemModalProps> = ({ open, onClose, onAddItem }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [image, setImage] = useState<string>("");

  const handleSubmit = async () => {
    if (!name || !description || !weight || !height || !length || !width || !photo) {
      alert("Please fill in all fields and upload a photo");
      return;
    }

    try {
      const base64Image = await blobToBase64(photo);
      const newItem: Item = {
        id: Date.now().toString(), // Generate a simple ID for new items
        name,
        description,
        image: base64Image,
        userId: "TEMP_USER_ID",
        weight: parseFloat(weight),
        size: {
          height: parseFloat(height),
          length: parseFloat(length),
          width: parseFloat(width)
        }
      };

      onAddItem(newItem);
      onClose();
      resetForm();
    } catch (error) {
      console.error("Error converting image:", error);
      alert("Failed to process image");
    }
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setWeight("");
    setHeight("");
    setLength("");
    setWidth("");
    setPhoto(null);
    setImage("");
    const fileInput = document.getElementById("photo") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };


  const inputFields = [
    { type: "text", placeholder: "Name", value: name, onChange: setName },
    { type: "text", placeholder: "Description", value: description, onChange: setDescription },
    { type: "number", placeholder: "Weight (kg)", value: weight, onChange: setWeight },
    { type: "number", placeholder: "Height (cm)", value: height, onChange: setHeight },
    { type: "number", placeholder: "Length (cm)", value: length, onChange: setLength },
    { type: "number", placeholder: "Width (cm)", value: width, onChange: setWidth },
  ];

  return (
    <Modal open={open} onClose={onClose} sx={{ backdropFilter: "blur(8px)" }}>
      <Box className="modal-container">
        <CloseIcon onClick={onClose} className="close-icon" />
        <Box className="modal-header">
          <h2 className="modal-title">Add New Item</h2>
        </Box>


        {inputFields.map((field) => (
          <InputField
            key={field.placeholder}
            type={field.type}
            placeholder={field.placeholder}
            value={field.value}
            onChange={field.onChange}
          />
        ))}

        <div className="upload-photo">
          <label htmlFor="photo">Upload Photo</label>
          <input
            id="photo"
            type="file"
            accept="image/jpeg,image/png,image/gif"
            onChange={(e) => {
              const file = e.target.files ? e.target.files[0] : null;
              if (file) {
                if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
                  alert("Please upload a valid image file (JPEG, PNG, GIF)");
                  return;
                }
                if (file.size > 5 * 1024 * 1024) {
                  alert("File size should be less than 5 MB");
                  return;
                }
                setPhoto(file);
                setImage(URL.createObjectURL(file));
              }
            }}
            className="inventory-input"
            required
          />
          {image && (
            <div className="photo-preview">
              <img
                src={image}
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: "90px", objectFit: "cover", borderRadius: "8px", marginTop: "8px" }}
              />
              <button type="button" onClick={() => {
                setPhoto(null);
                setImage("");
              }}>Remove</button>
            </div>
          )}
        </div>

        <button className="add-item-modal-button" onClick={handleSubmit}>Add item</button>
      </Box>
    </Modal>
  );
};

export default AddItemModal;
