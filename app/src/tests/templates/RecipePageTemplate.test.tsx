import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import RecipesContextProvider, {
  RecipesContext,
} from '../../contexts/RecipesContext';
import allRecipes from '../../mocks/data/allRecipes.json';
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

    const ingredients = await screen.findAllByTestId('ingredient');
    expect(ingredients).toHaveLength(6);

    const videoModal = await screen.findByTestId('video-modal');
    expect(videoModal).toBeInTheDocument();
    expect(videoModal).toHaveClass('modal');

    const shareButtonsList = await screen.findAllByTestId('share-button');
    expect(shareButtonsList).toHaveLength(6);

    const relatedRecipes = await screen.findByText(
      /It seems that there is no related recipes yet./i
    );
    expect(relatedRecipes).toBeInTheDocument();

    const recipeVideoTrigger = await screen.findByTestId('video-modal-trigger');
    userEvent.click(recipeVideoTrigger);
    expect(videoModal).toHaveClass('modal open');
  });

  test('Data provided - another recipe with different properties', async () => {
    global.window = Object.create(window);
    const url = '/recipes/dessert/52923';
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

    const image = await screen.findByAltText(/Dish: Canadian Butter Tarts/i);
    expect(image).toBeInTheDocument();

    const relatedRecipes = await screen.findAllByTestId('related-recipe');
    expect(relatedRecipes).toHaveLength(2);
  });
});
