import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Item } from "@/types/Item";

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <Card
      sx={{
        width: 250,
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.05)" },
        margin: "16px",
      }}
    >
      <CardMedia
        component="img"
        image={item.image}
        alt={item.name}
        sx={{
          height: 150,
          objectFit: 'cover'
        }}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
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
      </CardContent>
    </Card>
  );
};

export default ItemCard;
