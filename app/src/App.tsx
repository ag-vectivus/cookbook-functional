import React from 'react';
import RecipesContextProvider from './contexts/RecipesContext';

// pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <RecipesContextProvider>
        <Home />
      </RecipesContextProvider>
    </div>
  );
}

export default App;
