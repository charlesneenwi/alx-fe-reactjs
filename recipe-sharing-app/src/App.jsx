import { Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList.jsx";
import AddRecipeForm from "./components/AddRecipeForm.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";

function App() {
  return (
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

      {}
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  );
}

export default App;
