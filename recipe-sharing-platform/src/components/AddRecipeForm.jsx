import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Recipe title is required";
    } else if (formData.title.trim().length < 3) {
      newErrors.title = "Recipe title must be at least 3 characters";
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else if (formData.ingredients.trim().length < 10) {
      newErrors.ingredients = "Please provide more detailed ingredients";
    }

    if (!formData.instructions.trim()) {
      newErrors.instructions = "Instructions are required";
    } else if (formData.instructions.trim().length < 20) {
      newErrors.instructions = "Please provide more detailed instructions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form is valid:", formData);

      // Reset form
      setFormData({ title: "", ingredients: "", instructions: "" });
      setErrors({});

      alert("Recipe added successfully!");
    } else {
      console.log("Form has errors:", errors);
    }
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
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                  errors.title ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
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
                rows="6"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none ${
                  errors.ingredients ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.ingredients && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.ingredients}
                </p>
              )}
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
                rows="8"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none ${
                  errors.instructions ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.instructions && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.instructions}
                </p>
              )}
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
