import IRecipe from '../ts/interfaces/IRecipe';

const ingredientsArray = (recipe: IRecipe, type: string) => {
  const entries = Object.entries(recipe);
  const regexType = new RegExp('^' + type);
  const result: string[] = [];

  entries.forEach((subArray) => {
    if (subArray[0].match(regexType) && subArray[1] !== '') {
      result.push(subArray[1]);
    }
  });

  return result;
};

export default ingredientsArray;
