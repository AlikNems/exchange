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
}

const ItemDetailsModal: React.FC<ItemDetailsModalProps> = ({ item, open, onClose }) => {
  if (!item) return null;

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
        }}
      >
        <CardMedia
          component="img"
          image={item.image || "/fallback-image.png"}
          alt={item.name}
          sx={{ height: 200, objectFit: "cover", borderRadius: 2 }}
        />
        <Typography variant="h6" sx={{ mt: 2 }}>
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Description:</strong> {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Weight:</strong> {item.weight} kg
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Size:</strong> {item.size} cm
        </Typography>
        <Button onClick={onClose} variant="contained" sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ItemDetailsModal;
