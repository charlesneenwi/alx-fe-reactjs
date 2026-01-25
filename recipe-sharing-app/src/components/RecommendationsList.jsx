import { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const favorites = useRecipeStore((state) => state.favorites || []);
  const recommendations = useRecipeStore((state) => state.recommendations || []);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  
  useEffect(() => {
    generateRecommendations();
  }, [favorites]);

  const handleAddFavorite = (id) => {
    addFavorite(id); 
  };

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length === 0 && <p>No recommendations yet.</p>}
      {recommendations.map((recipe) => (
        <div key={recipe.id}>
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

export default RecommendationsList;
