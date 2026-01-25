import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList.jsx";
import AddRecipeForm from "./components/AddRecipeForm.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />

        {/* Recipe details page */}
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
