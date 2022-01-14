import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RecipesContextProvider from '../../contexts/RecipesContext';
import { AuthContext } from '../../contexts/AuthContext';
import MyRecipes from '../../pages/MyRecipes';

describe('MyRecipes displays correctly', () => {
  test('should display 2 recipes', async () => {
    const dispatchAuth = jest.fn();
    const auth = { uid: '208s765s9823' };

    render(
      <RecipesContextProvider>
        <AuthContext.Provider value={{ auth, dispatchAuth }}>
          <BrowserRouter>
            <MyRecipes />
          </BrowserRouter>
        </AuthContext.Provider>
      </RecipesContextProvider>
    );

    const recipes = await screen.findAllByAltText(/dish/i);
    expect(recipes).toHaveLength(2);
  });

  test('should display one recipe', async () => {
    const dispatchAuth = jest.fn();
    const auth = { uid: '208d765d9823' };

    render(
      <RecipesContextProvider>
        <AuthContext.Provider value={{ auth, dispatchAuth }}>
          <BrowserRouter>
            <MyRecipes />
          </BrowserRouter>
        </AuthContext.Provider>
      </RecipesContextProvider>
    );

    const recipes = await screen.findAllByAltText(/dish/i);
    expect(recipes).toHaveLength(1);
  });

  test('should display no recipe', () => {
    const dispatchAuth = jest.fn();
    const auth = { uid: '208a765a9823' };

    render(
      <RecipesContextProvider>
        <AuthContext.Provider value={{ auth, dispatchAuth }}>
          <BrowserRouter>
            <MyRecipes />
          </BrowserRouter>
        </AuthContext.Provider>
      </RecipesContextProvider>
    );

    const noContent = screen.getByText(/there is no content yet/i);
    expect(noContent).toBeInTheDocument();
  });
});
