import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";


const RecipeCard = ({ recipe }) => {
  

  return (
    <Link to={`/recipe/${recipe.uri.split("_")[1]}`} style={{ textDecoration: 'none' }}>
    <Card sx={{ maxWidth: 200, maxHeight: 320 }}>
      <CardMedia
        component="img"
        alt={recipe.label}
        height="200"
        image={recipe.image}
        sx={{ objectFit: "cover" }} // Ensure the image covers the card area
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {recipe.label}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {recipe.source}
        </Typography>
      </CardContent>
    </Card>
    </Link>
  );
};

// <Card sx={{ maxWidth: 345 }}>
//
//
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
export default RecipeCard;
