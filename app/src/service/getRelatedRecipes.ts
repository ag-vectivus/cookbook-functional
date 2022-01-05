import shuffleArray from '../helpers/shuffleArray';
import IRecipe from '../ts/interfaces/IRecipe';

const getRelatedRecipes = (
  recipes: IRecipe[],
  currentRecipeCategory: string,
  currentRecipeId: string
) => {
  const filteredRecipes: IRecipe[] = recipes
    .filter(
      (recipe) =>
        recipe.category.toLowerCase() === currentRecipeCategory.toLowerCase()
    )

    .filter((recipe) => recipe.id !== currentRecipeId);
  const shuffledRecipes = shuffleArray(filteredRecipes).slice(0, 3);

  return shuffledRecipes;
};

export default getRelatedRecipes;
