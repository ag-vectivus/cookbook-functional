import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipesContextProvider from './contexts/RecipesContext';
import AuthContextProvider from './contexts/AuthContext';
import Navbar from './static/Navigation/Navbar';
import Header from './static/Header/Header';
import Footer from './static/Footer/Footer';
import ScrollButton from './components/ScrollButton';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Recipes from './pages/Recipes';
import Sitemap from './pages/Sitemap';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import StaticPage from './pages/StaticPage';
import Recipe from './pages/Recipe';
import SignIn from './modules/auth/SignIn';
import SignUp from './modules/auth/SignUp';
import ResetPassword from './modules/auth/ResetPassword';

const App = (): JSX.Element => {
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
              <Route path="recipes/:category/:id" element={<Recipe />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="resetpassword" element={<ResetPassword />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<StaticPage />} />
              <Route path="terms" element={<StaticPage />} />
              <Route path="privacy" element={<StaticPage />} />
              <Route path="sitemap" element={<Sitemap />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ScrollButton />
            <Footer />
          </BrowserRouter>
        </AuthContextProvider>
      </RecipesContextProvider>
    </div>
  );
};

export default App;
