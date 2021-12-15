import IRecipe from './IRecipe';

export default interface IRecipeAction {
  type: string;
  recipes: IRecipe[] | undefined;
}
