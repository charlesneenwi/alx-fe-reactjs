import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find(
      (item) => item.id === Number(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Recipe not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">

        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded mb-6"
        />

        <h1 className="text-3xl font-bold mb-4">
          {recipe.title}
        </h1>

        {/* Ingredients */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Cooking Instructions
          </h2>
          <ol className="list-decimal list-inside space-y-1">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <Link
          to="/"
          className="text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>

      </div>
    </div>
  );
};

export default RecipeDetail;
