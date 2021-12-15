import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RecipesContextProvider from './contexts/RecipesContext';

// components
import Navbar from './modules/Navigation/Navbar';
import Header from './modules/Header/Header';
import Footer from './modules/Footer/Footer';

// pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <RecipesContextProvider>
        <BrowserRouter>
          <Navbar />
          <Header />
          <Home />
          <Footer />
        </BrowserRouter>
      </RecipesContextProvider>
    </div>
  );
}

export default App;
