import getVideoId from './getVideoId';

// interfaces
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

const getRandomVideos = (recipes: IRecipe[], numberOfVideosToGet: number) => {
  const recipesWithVideos: IRecipe[] = recipes.filter(
    ({ video }) => video !== null || undefined
  );
  const shuffledRecipes: IRecipe[] = shuffleArray(recipesWithVideos);
  const result = shuffledRecipes.slice(0, numberOfVideosToGet).map((recipe) => {
    const videoId: string = getVideoId(recipe.video!);
    return {
      id: recipe.id,
      name: recipe.name,
      videoId,
      category: recipe.category,
    };
  });

  return result;
};

export default getRandomVideos;
