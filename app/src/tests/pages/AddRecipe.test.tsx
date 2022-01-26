import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthContext } from '../../contexts/AuthContext';
import AddRecipe from '../../pages/AddRecipe';
import messages from '../../config/messages';

describe('Display AddRecipe page correctly', () => {
  test('AddRecipe add and remove buttons work properly', () => {
    const dispatchAuth = jest.fn();
    const auth = { uid: '208s765s9823' };

    render(
      <AuthContext.Provider value={{ auth, dispatchAuth }}>
        <BrowserRouter>
          <AddRecipe />
        </BrowserRouter>
      </AuthContext.Provider>
    );

    const heading = screen.getByRole('heading', { name: /add recipe/i });
    expect(heading).toBeInTheDocument();

    let ingredientOne = screen.getByLabelText(/ingredient 1/i);
    let ingredientTwo = screen.queryByLabelText(/ingredient 2/i);
    expect(ingredientOne).toBeInTheDocument();
    expect(ingredientTwo).not.toBeInTheDocument();

    let addIngredientBtn = screen.getByTestId('add-ingredient-button');
    let removeIngredientBtn = screen.queryByTestId('remove-ingredient-button');
    expect(addIngredientBtn).toBeInTheDocument();
    expect(removeIngredientBtn).not.toBeInTheDocument();

    userEvent.click(addIngredientBtn);
    ingredientTwo = screen.getByLabelText(/ingredient 2/i);
    removeIngredientBtn = screen.getByTestId('remove-ingredient-button');
    expect(ingredientTwo).toBeInTheDocument();
    expect(removeIngredientBtn).toBeInTheDocument();

    userEvent.click(removeIngredientBtn);
    ingredientTwo = screen.queryByLabelText(/ingredient 2/i);
    removeIngredientBtn = screen.queryByTestId('remove-ingredient-button');
    expect(ingredientTwo).not.toBeInTheDocument();
    expect(removeIngredientBtn).not.toBeInTheDocument();
  });
  test('AddRecipe submit works', async () => {
    const dispatchAuth = jest.fn();
    const auth = { uid: '208s765s9823' };

    render(
      <AuthContext.Provider value={{ auth, dispatchAuth }}>
        <BrowserRouter>
          <AddRecipe />
        </BrowserRouter>
      </AuthContext.Provider>
    );

    const recipeName = screen.getByLabelText(/recipe name/i);
    const recipeCategory = screen.getByLabelText(/category/i);
    const recipeIngredient = screen.getByLabelText(/ingredient 1/i);
    const recipeInstructions = screen.getByLabelText(/instructions/i);
    const submitBtn = screen.getByRole('button', { name: /add/i });
    let serverResponse = screen.queryByTestId('request-message');

    expect(recipeName).toBeInTheDocument();
    expect(recipeCategory).toBeInTheDocument();
    expect(recipeIngredient).toBeInTheDocument();
    expect(recipeInstructions).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(serverResponse).not.toBeInTheDocument();

    userEvent.type(recipeName, 'Mock');
    userEvent.type(recipeCategory, 'beef');
    userEvent.type(recipeIngredient, '1/2 teaspoon mock beef');
    userEvent.type(recipeInstructions, 'Cook the mock beef!');
    userEvent.click(submitBtn);

    serverResponse = await screen.findByTestId('request-message');
    expect(serverResponse).toHaveTextContent(messages.RecipeAdded);
  });
});
