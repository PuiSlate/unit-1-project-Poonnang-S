import { useState } from 'react'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import RecipesPage from './components/pages/Recipes/RecipesPage'
import NavBar from './components/Layout/NavBar'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import SubscribePage from './components/pages/SubscribePage'
import ContactPage from './components/pages/ContactPage'





function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
   <Header />
   
   <main>

    <Route path="/recipes" element={<RecipesPage />} />
    <Route path="/recipes/:id" element={<RecipeDetailsPage />} />

   </main>
   <Footer />

    </>
  )
}

export default App
