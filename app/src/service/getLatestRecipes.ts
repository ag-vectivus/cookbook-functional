import IRecipe from '../ts/interfaces/IRecipe';

const sortRecipes = (array: IRecipe[]): void => {
  array.sort(function (a: IRecipe, b: IRecipe) {
    const c = Number(new Date(a.date));
    const d = Number(new Date(b.date));
    return c - d;
  });
};

const getLatestRecipes = (
  recipes: IRecipe[],
  numberOfLatestRecipes: number
): IRecipe[] => {
  const givenRecipes = recipes.slice();
  sortRecipes(givenRecipes);
  const result = givenRecipes.slice(0, numberOfLatestRecipes);
  return result;
};

export default getLatestRecipes;
