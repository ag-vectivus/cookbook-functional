import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import RecipesContextProvider from '../../contexts/RecipesContext';
import Categories from '../../pages/Categories';

describe('Display Categories page correctly', () => {
  test('Display data from context', async () => {
    render(
      <RecipesContextProvider>
        <BrowserRouter>
          <Categories />
        </BrowserRouter>
      </RecipesContextProvider>
    );

    // categories cards
    const cards = await screen.findAllByAltText(/dish\:/i);
    expect(cards).toHaveLength(14);
  });
});
