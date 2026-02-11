import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Recipe Sharing Platform</h1>
        <p className="text-gray-600 text-lg">
          Discover delicious recipes for every occasion
        </p>
        
        {/* Add Recipe Button */}
        <div className="mt-6">
          <Link to="/add-recipe">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
              + Add New Recipe
            </button>
          </Link>
        </div>
      </header>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="group block bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
           
            <div className="relative h-40 w-full overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-orange-600 transition-colors duration-300">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-2">{recipe.summary}</p>
            </div>

           
            <div className="p-4 border-t border-gray-100 flex justify-end">
              <span className="text-orange-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                More Details →
              </span>
            </div>
          </Link>
        ))}

        {/* Empty State */}
        {recipes.length === 0 && (
          <div className="text-center py-20 col-span-full">
            <p className="text-gray-500 text-xl font-medium">No recipes found</p>
            <p className="text-gray-400 text-sm mt-2">
              Check back later for delicious recipes!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;