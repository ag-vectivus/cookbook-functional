import getVideoId from './getVideoId';
import shuffleArray from '../helpers/shuffleArray';

// interfaces
import IRecipe from '../ts/interfaces/IRecipe';

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
