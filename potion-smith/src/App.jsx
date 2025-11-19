import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router';
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import RecipesPage from './components/pages/Recipes/RecipesPage'
import { mockRecipes } from "./test-data/mockRecipe";
import RecipeDetailsPage from './components/pages/Recipes/RecipeDetailsPage';
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import SubscribePage from './components/pages/SubscribePage'
import ContactPage from './components/pages/ContactPage'





function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState(mockRecipes);

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recipes" element={<RecipesPage recipes={recipes} searchQuery={searchQuery} />} />
        <Route path="/recipes/:id" element={<RecipeDetailsPage recipes={recipes} setRecipes={setRecipes} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;