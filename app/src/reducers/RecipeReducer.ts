import IRecipe from '../ts/interfaces/IRecipe';
import IIndexable from '../ts/interfaces/IIndexable';
import IRecipeAction from '../ts/interfaces/IRecipeAction';

const strategies: IIndexable = {
  GET_ALL_RECIPES: getAllRecipes,
  __default__: (state: IRecipe[] | null | undefined) => state,
};

export const RecipeReducer = (state: IRecipe[], action: IRecipeAction) => {
  const transformer = strategies[action.type] ?? strategies.__default__;
  return transformer(state, action);
};

function getAllRecipes(state: IRecipe[], action: IRecipeAction) {
  const { recipes } = action;
  return recipes;
}
