import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRecipe = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Failed to load recipe');
        }
        const data = await response.json();
        const foundRecipe = data.find(r => r.id === parseInt(id));
        
        if (!foundRecipe) {
          throw new Error('Recipe not found');
        }
        
        setRecipe(foundRecipe);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500 mx-auto mb-4"></div>
          <div className="text-xl text-gray-600">Loading recipe...</div>
        </div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center px-4">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recipe Not Found</h2>
          <p className="text-gray-600 mb-8">{error || 'The recipe you are looking for does not exist.'}</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Recipes</span>
          </button>
        </div>
      </nav>

      {/* Recipe Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Recipe Card */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Recipe Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-500 flex items-center justify-center">
            {recipe.image && !recipe.image.includes('placeholder') ? (
              <img 
                src={recipe.image} 
                alt={recipe.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-9xl">🍽️</span>';
                }}
              />
            ) : (
              <span className="text-9xl">🍽️</span>
            )}
          </div>

          {/* Recipe Details */}
          <div className="p-6 sm:p-8 lg:p-12">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {recipe.title}
            </h1>

            {/* Summary */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Description</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {recipe.summary}
              </p>
            </div>

            {/* Additional Information Placeholder */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recipe Details</h2>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                <p className="text-orange-800">
                  <span className="font-semibold">Note:</span> Full recipe instructions, ingredients, and cooking steps will be displayed here.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-200">
              <button className="flex-1 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Save Recipe
              </button>
              <button className="flex-1 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transition-colors duration-300 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
            </div>
          </div>
        </article>

        {/* Related Recipes Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">More Recipes</h2>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            View All Recipes
          </Link>
        </div>
      </main>
    </div>
  );
};

export default RecipeDetail;
