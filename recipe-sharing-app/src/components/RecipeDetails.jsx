import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore.js";
import EditRecipeForm from "./EditRecipeForm.jsx";
import DeleteRecipeButton from "./DeleteRecipeButton.jsx";

const RecipeDetails = () => {
  const { id } = useParams(); 
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Edit and Delete */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
