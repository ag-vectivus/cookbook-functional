import allRecipes from '../../mocks/data/allRecipes.json';
import ingredientsArray from '../../service/ingredientsArray';
import IRecipe from '../../ts/interfaces/IRecipe';

test('get ingredients/measure from recipe object and turn them into array', () => {
  const recipes: IRecipe[] = Array.from(allRecipes.recipes);

  const ingredients = ingredientsArray(recipes[0], 'ingredient');
  expect(ingredients).toHaveLength(7);

  const measures = ingredientsArray(recipes[0], 'measure');
  expect(measures).toHaveLength(7);
});
