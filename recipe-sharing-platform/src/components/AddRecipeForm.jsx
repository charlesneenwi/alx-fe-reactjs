import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({ title: "", ingredients: "", instructions: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Add New Recipe</h1>
          <p className="text-gray-600 text-lg">
            Share your favorite recipe with the community
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block text-gray-700 font-semibold mb-2"
              >
                Recipe Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter recipe title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="ingredients"
                className="block text-gray-700 font-semibold mb-2"
              >
                Ingredients
              </label>
              <textarea
                name="ingredients"
                id="ingredients"
                placeholder="List all ingredients (one per line)"
                value={formData.ingredients}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="instructions"
                className="block text-gray-700 font-semibold mb-2"
              >
                Instructions
              </label>
              <textarea
                name="instructions"
                id="instructions"
                placeholder="Describe the preparation steps"
                value={formData.instructions}
                onChange={handleChange}
                required
                rows="8"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
              >
                Add Recipe
              </button>

              <Link to="/" className="flex-1">
                <button
                  type="button"
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddRecipeForm;
