import allRecipes from '../../mocks/data/allRecipes.json';
import getLatestRecipes from '../../service/getLatestRecipes';
import IRecipe from '../../ts/interfaces/IRecipe';

test('sort recipes by date and return explicit number of last of them', () => {
  const { recipes } = allRecipes;
  const latestRecipes: IRecipe[] = getLatestRecipes(recipes, 2);

  expect(latestRecipes).toHaveLength(2);
  expect(latestRecipes[0].name).toStrictEqual('Canadian Butter Tarts');
});
