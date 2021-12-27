import IRecipe from '../ts/interfaces/IRecipe';

const shuffleArray = (array: IRecipe[]): IRecipe[] => {
  // Fisher-Yates shuffle algorithm
  for (let i: number = array.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

export default shuffleArray;
