import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList.jsx";
import AddRecipeForm from "./components/AddRecipeForm.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";
import SearchBar from "./components/SearchBar.jsx";
import FavoritesList from "./components/FavoritesList.jsx";
import RecommendationsList from "./components/RecommendationsList.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <AddRecipeForm />
              <FavoritesList />
              <RecommendationsList />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
