import allRecipes from '../../mocks/data/allRecipes.json';
import getRandomVideos from '../../service/getRandomVideos';
import IRecipe from '../../ts/interfaces/IRecipe';

test('filter recipes containing videos and get some of them randomly', () => {
  const recipes: IRecipe[] = Array.from(allRecipes.recipes);
  const randomVideos = getRandomVideos(recipes, 3);

  expect(randomVideos).toHaveLength(3);
});
