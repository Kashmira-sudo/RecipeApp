import React, { useState,useEffect } from "react";
import { Container, Typography } from "@mui/material";
import SearchBar from "../../src/components/SearchBar";
import RecipeList from "../../src/components/RecipeList";


const Home = () => {
  const [recipes, setRecipes] = useState([]);

  
  const fetchRecipes = async (query='pasta') => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=your_appid&app_key=your_app_key	`
    );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  useEffect(() => {
    fetchRecipes(); // This defaults to 'chicken'
  }, []);


  return (
    <Container>
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </Container>
  );
};

export default Home;
