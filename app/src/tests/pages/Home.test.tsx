import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    // recipe videos
    const videos = await screen.findAllByAltText(/video thumbnail/i);
    expect(videos).toHaveLength(3);

    // latest recipes
    const latestRecipes = await screen.findAllByAltText(/latest recipe/i);
    expect(latestRecipes).toHaveLength(4);
  });

  test('Display aside', () => {
    render(
      <RecipesContextProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </RecipesContextProvider>
    );

    // about section
    const aboutHeading = screen.getByRole('heading', { name: /about/i });
    expect(aboutHeading).toBeInTheDocument();
  });

  test('Home page shows modal onclick', async () => {
    render(
      <RecipesContextProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </RecipesContextProvider>
    );

    const videoModal = await screen.findAllByTestId('video-modal');
    expect(videoModal).toHaveLength(3);
    expect(videoModal[0]).toHaveClass('modal');

    const recipeVideoTrigger = await screen.findAllByTestId(
      'video-modal-trigger'
    );
    userEvent.click(recipeVideoTrigger[0]);
    expect(videoModal[0]).toHaveClass('modal open');
  });
});
