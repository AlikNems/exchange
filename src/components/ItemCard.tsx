import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Item {
  name: string;
  description: string;
  image: string;
  userId: string;
}

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <Card
      className="inventory-card"
      sx={{
        width: "10vw",
        minWidth: 220,
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.05)" },
        margin: "16px",
      }}
    >
      <CardMedia
        component="img"
        image={item.image} // Используем изображение из БД
        alt={item.name}
        sx={{ height: 100, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
      />
      <CardContent
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color: "#fff" }}>
          {item.name}
        </Typography>
        <Typography
          variant="body2"
          color="#bbb"
          sx={{
            fontSize: 14,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
          }}
        >
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
