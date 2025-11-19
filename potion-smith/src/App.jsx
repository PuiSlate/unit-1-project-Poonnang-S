import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router';
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import RecipesPage from './components/pages/Recipes/RecipesPage'
import RecipeDetailsPage from './components/pages/Recipes/RecipeDetailsPage';
import NavBar from './components/Layout/NavBar'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import SubscribePage from './components/pages/SubscribePage'
import ContactPage from './components/pages/ContactPage'





function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
   <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
   />
   <Routes>
      <Route path="/recipes" 
      element={<RecipesPage searchQuery={searchQuery}/>} 
        
      />
    <Route path="/recipes/:id" element={<RecipeDetailsPage />} />

   </Routes>
   
   <Footer />

    </>
  )
}

export default App
