import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

// context
import RecipesContextProvider, {
  RecipesContext,
} from '../../contexts/RecipesContext';

// data
import allRecipes from '../../mocks/data/allRecipes.json';

// template
import RecipePageTemplate from '../../templates/RecipePageTemplate';

describe('RecipePageTemplate displays correctly', () => {
  test('No data provided', () => {
    global.window = Object.create(window);
    const url = '/recipes/seafood/mock';
    Object.defineProperty(window, 'location', {
      value: {
        pathname: url,
      },
      writable: true,
    });

    render(
      <RecipesContextProvider>
        <BrowserRouter>
          <RecipePageTemplate />
        </BrowserRouter>
      </RecipesContextProvider>
    );

    const heading = screen.getByRole('heading', { name: /recipe: mock/i });
    expect(heading).toBeInTheDocument();

    const noData = screen.getByText(/there is no recipe/i);
    expect(noData).toBeInTheDocument();
  });

  test('Data provided', async () => {
    global.window = Object.create(window);
    const url = '/recipes/seafood/53023';
    Object.defineProperty(window, 'location', {
      value: {
        pathname: url,
      },
      writable: true,
    });

    const dispatchRecipe = jest.fn();
    const { recipes } = allRecipes;

    render(
      <RecipesContext.Provider value={{ recipes, dispatchRecipe }}>
        <BrowserRouter>
          <RecipePageTemplate />
        </BrowserRouter>
      </RecipesContext.Provider>
    );

    const image = await screen.findByAltText(/dish: Sledz w Oleju/i);
    expect(image).toBeInTheDocument();

    const instructions = await screen.findByText(/soak herring in cold water/i);
    expect(instructions).toBeInTheDocument();

    const ingredients = await screen.findAllByRole('listitem');
    expect(ingredients).toHaveLength(6);

    const videoModal = await screen.findByTestId('video-modal');
    expect(videoModal).toBeInTheDocument();
    expect(videoModal).toHaveClass('modal');

    const recipeVideoTrigger = await screen.findByTestId('video-modal-trigger');
    userEvent.click(recipeVideoTrigger);
    expect(videoModal).toHaveClass('modal open');
  });
});
