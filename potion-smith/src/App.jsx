import { useState } from 'react'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import mockRecipe from './test-data'





function App() {
  

  return (
    <>
    <Header /> 
    <AboutPage />
    <Footer />
    </>
  )
}

export default App
