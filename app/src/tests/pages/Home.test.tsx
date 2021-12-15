import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipesContextProvider from '../../contexts/RecipesContext';
import Home from '../../pages/Home';

describe('Display Home page correctly', () => {
  test('Display data from context', async () => {
    render(
      <RecipesContextProvider>
        <Home />
      </RecipesContextProvider>
    );

    const heading = screen.getByRole('heading', { name: /cookbook/i });
    expect(heading).toBeInTheDocument();

    const noContent = screen.getByText(/there is no content yet/i);
    expect(noContent).toBeInTheDocument();

    const recipesList = await screen.findAllByRole('listitem');
    expect(recipesList).toHaveLength(4);
  });
});
