import React, { useState, useEffect } from 'react';
import RecipeListPage from './RecipeListPage';

const RecipeList = props => {

    const API_ID = "8dc09389";
    const APP_KEY = "1674d16d7f2960217ac6957f8be3d6d8";
    const SEARCH_KEY = props.searchItem;


    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData= async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${SEARCH_KEY}&app_id=${API_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        console.log(data.hits);
        const formattedRecipe = formatRecipe(data.hits);
        console.log(formattedRecipe);
        setRecipes(formattedRecipe);
    }

    const formatRecipe = (recipes) => {
        let tempRecipes = recipes.map(recipe => {
            let image = recipe.recipe.image;
            let name = recipe.recipe.source;
            let ingredients = recipe.recipe.ingredients.map(ingredient => ingredient.text);
            let calories = recipe.recipe.calories;
            let healthLabels = recipe.recipe.healthLabels;

            let tempRecipe = {image, name, ingredients, calories, healthLabels}
            return tempRecipe;
        });

        return tempRecipes;
    }

    return(
        <RecipeListPage recipe = {recipes} />
    )
}

export default RecipeList;