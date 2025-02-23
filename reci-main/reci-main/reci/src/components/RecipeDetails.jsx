import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Box,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { useTheme } from "../../src/components/ThemeContext";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=your_app_id&app_key=your_app_key`
      );
      const data = await response.json();
      setRecipe(data.recipe);
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const containerStyles = {
    backgroundColor: theme === "light" ? "#fff" : "#121212",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    transition: "background-color 0.3s, color 0.3s",
  };

  const boxStyles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    transition: "background-color 0.3s, color 0.3s",
  };

  const dividerStyles = {
    backgroundColor: theme === "light" ? "#ccc" : "#555",
  };

  return (
    <Container style={containerStyles}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Box
          sx={{
            flex: "0 0 300px",
            position: "fixed",
            width: "300px",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            alt={recipe.label}
            height="100%"
            image={recipe.image}
            sx={{
              objectFit: "cover",
              height: "300px",
              width: "300px",
              marginTop: "70px",
            }}
          />
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "600",
              color: theme === "light" ? "#000" : "#fff",
            }}
          >
            {recipe.label}
          </Typography>
        </Box>

        <Box
          sx={{
            flex: "1",
            marginLeft: "300px",
            padding: "20px",
            overflowY: "scroll",
            height: "100vh",
            ...boxStyles,
          }}
        >
          <Card sx={{ ...boxStyles }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "700",
                  color: theme === "light" ? "#000" : "#fff",
                }}
              >
                {recipe.label}
              </Typography>

              <Divider sx={{ ...dividerStyles }} />
              <Typography
                variant="body2"
                component="p"
                sx={{ color: theme === "light" ? "#000" : "#bbb" }}
              >
                <strong>Calories:</strong> {recipe.calories.toFixed(0)}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ color: theme === "light" ? "#000" : "#bbb" }}
              >
                <strong>Cuisine Type:</strong> {recipe.cuisineType.join(", ")}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ color: theme === "light" ? "#000" : "#bbb" }}
              >
                <strong>Diet Labels:</strong> {recipe.dietLabels.join(", ")}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ color: theme === "light" ? "#000" : "#bbb" }}
              >
                <strong>Dish Type:</strong> {recipe.dishType.join(", ")}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ color: theme === "light" ? "#000" : "#bbb" }}
              >
                <strong>Health Labels:</strong> {recipe.healthLabels.join(", ")}
              </Typography>

              <Typography
                variant="body2"
                component="p"
                sx={{ color: theme === "light" ? "#000" : "#bbb" }}
              >
                <strong>Source:</strong>{" "}
                <a
                  href={recipe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme === "light" ? "#1a73e8" : "#bb86fc" }}
                >
                  {recipe.source}
                </a>
              </Typography>
              <Divider sx={{ ...dividerStyles }} />

              {/* Ingredients Section */}
              <Typography
                variant="body2"
                component="p"
                sx={{
                  marginTop: "10px",
                  color: theme === "light" ? "#000" : "#bbb",
                }}
              >
                <strong>Ingredients:</strong>
              </Typography>
              <List>
                {recipe.ingredientLines.map((ingredient, index) => (
                  <ListItem
                    key={index}
                    sx={{ color: theme === "light" ? "#000" : "#bbb" }}
                  >
                    {ingredient}
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ ...dividerStyles, marginTop: "20px" }} />

              {/* Nutrients Section */}
              <Typography
                variant="body2"
                component="p"
                sx={{
                  marginTop: "10px",
                  color: theme === "light" ? "#000" : "#bbb",
                }}
              >
                <strong>Nutrients:</strong>
              </Typography>
              <List>
                {recipe.totalNutrients && (
                  <>
                    <ListItem
                      sx={{ color: theme === "light" ? "#000" : "#bbb" }}
                    >
                      <strong>Fat:</strong>{" "}
                      {recipe.totalNutrients.FAT.quantity.toFixed(2)}{" "}
                      {recipe.totalNutrients.FAT.unit}
                    </ListItem>
                    <ListItem
                      sx={{ color: theme === "light" ? "#000" : "#bbb" }}
                    >
                      <strong>Calcium:</strong>{" "}
                      {recipe.totalNutrients.CA.quantity.toFixed(2)}{" "}
                      {recipe.totalNutrients.CA.unit}
                    </ListItem>
                    <ListItem
                      sx={{ color: theme === "light" ? "#000" : "#bbb" }}
                    >
                      <strong>Iron:</strong>{" "}
                      {recipe.totalNutrients.FE.quantity.toFixed(2)}{" "}
                      {recipe.totalNutrients.FE.unit}
                    </ListItem>
                  </>
                )}
              </List>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default RecipeDetail;
