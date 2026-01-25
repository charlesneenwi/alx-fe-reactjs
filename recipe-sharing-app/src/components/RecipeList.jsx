import { useRecipeStore } from "./recipeStore.js";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  if (recipes.length === 0) return <p>No recipes yet!</p>;

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map(recipe => (
        <div key={recipe.id} style={{ marginBottom: "10px" }}>
          <h3>{recipe.title}</h3>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link> {}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
