import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipesContextProvider from './contexts/RecipesContext';
import AuthContextProvider from './contexts/AuthContext';

// components
import Navbar from './modules/Navigation/Navbar';
import Header from './modules/Header/Header';
import Footer from './modules/Footer/Footer';

// pages
import Home from './pages/Home';
import Categories from './pages/Categories';
import Recipes from './pages/Recipes';
import Sitemap from './pages/Sitemap';
import NotFound from './pages/NotFound';

// templates
import StaticPageTemplate from './templates/StaticPageTemplate';
import RecipePageTemplate from './templates/RecipePageTemplate';

function App() {
  return (
    <div className="App">
      <RecipesContextProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <Navbar />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="recipes" element={<Categories />} />
              <Route path="recipes/:category" element={<Recipes />} />
              <Route
                path="recipes/:category/:id"
                element={<RecipePageTemplate />}
              />
              <Route path="about" element={<StaticPageTemplate />} />
              <Route path="terms" element={<StaticPageTemplate />} />
              <Route path="privacy" element={<StaticPageTemplate />} />
              <Route path="sitemap" element={<Sitemap />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </AuthContextProvider>
      </RecipesContextProvider>
    </div>
  );
}

export default App;
