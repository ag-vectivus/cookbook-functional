import allRecipes from '../../mocks/data/allRecipes.json';
import getRelatedRecipes from '../../service/getRelatedRecipes';
import IRecipe from '../../ts/interfaces/IRecipe';

describe('test getRelatedRecipes fn', () => {
  test('filter recipes from the same category and shuffle them', () => {
    const { recipes } = allRecipes;
    const relatedRecipes: IRecipe[] = getRelatedRecipes(
      recipes,
      'dessert',
      '52854'
    );

    expect(relatedRecipes).toHaveLength(2);
    expect(relatedRecipes[0].name.charAt(0)).toStrictEqual('C');
  });

  test('return empty array', () => {
    const { recipes } = allRecipes;
    const relatedRecipes: IRecipe[] = getRelatedRecipes(
      recipes,
      'seafood',
      '53023'
    );

    expect(relatedRecipes).toHaveLength(0);
  });
});
