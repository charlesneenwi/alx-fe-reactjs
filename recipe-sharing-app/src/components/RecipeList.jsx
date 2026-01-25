import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  // Combined handler for favorites + recommendations
  const handleAddFavorite = (id) => {
    addFavorite(id);
    generateRecommendations();
  };

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: "1px solid #ccc", margin: "8px", padding: "8px" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button
            onClick={() => handleAddFavorite(recipe.id)}
            disabled={favorites.includes(recipe.id)}
          >
            {favorites.includes(recipe.id) ? "Favorited" : "Add to Favorites"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
