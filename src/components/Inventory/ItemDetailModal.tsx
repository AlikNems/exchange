import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { Item } from "@/types/Item";

interface ItemDetailsModalProps {
  item: Item | null;
  open: boolean;
  onClose: () => void;
  onDelete: (id: string) => void;
}

const ItemDetailsModal: React.FC<ItemDetailsModalProps> = ({
  item,
  open,
  onClose,
  onDelete,
}) => {
  if (!item) return null;

  const handleDelete = () => {
    onDelete(item.id);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
          {item.name}
        </Typography>

        <CardMedia
          component="img"
          image={item.image || "/fallback-image.png"}
          alt={item.name}
          sx={{ height: 200, objectFit: "cover", borderRadius: 2, mt: 2 }}
        />

        <Box sx={{ width: "100%", mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Weight:</strong> {item.weight} kg
          </Typography>
          <Typography variant="body2">
          Size: {item.size.height} x {item.size.length} x {item.size.width} cm
        </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Description:</strong> {item.description}
          </Typography>
        </Box>

        <Button onClick={onClose} variant="contained" sx={{ mt: 3 }}>
          Close
        </Button>
        <Button
          onClick={handleDelete}
          variant="contained"
          color="error"
          sx={{ mt: 1 }}
        >
          Remove
        </Button>
      </Box>
    </Modal>
  );
};

export default ItemDetailsModal;
