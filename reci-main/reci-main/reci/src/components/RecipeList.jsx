import React from 'react';
import { Grid2 } from '@mui/material'; // Correct import for Grid2
import RecipeCard from '../../src/components/RecipeCard';

const RecipeList = ({ recipes }) => {
  return (
    <Grid2 container spacing={4}>
      {recipes.map((item, index) => (
        <Grid2 item key={index}  xs={12} sm={6} md={4}>
          <RecipeCard recipe={item.recipe} />
        </Grid2>
      ))}
    </Grid2>
  );
};




export default RecipeList;
