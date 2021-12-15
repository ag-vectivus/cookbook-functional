import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import RecipesContextProvider from '../../contexts/RecipesContext';
import Home from '../../pages/Home';

describe('Display Home page correctly', () => {
  test('Display data from context', async () => {
    render(
      <RecipesContextProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </RecipesContextProvider>
    );

    const noContent = screen.getByText(/there is no content yet/i);
    expect(noContent).toBeInTheDocument();

    // recipe videos
    const videos = await screen.findAllByAltText(/video thumbnail/i);
    expect(videos).toHaveLength(3);
  });
});
