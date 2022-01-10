import pagination from '../../service/pagination';
import allRecipes from '../../mocks/data/allRecipes.json';
import IRecipe from '../../ts/interfaces/IRecipe';
import paginationItemsPerPage from '../../config/paginationItemsPerPage';

describe('test pagination behaviour', () => {
  test('should not trigger if there is not enough recipes', () => {
    let recipes: IRecipe[] = allRecipes.recipes;
    let selected = 1;

    // 4 recipes - pagination is not triggered
    recipes = allRecipes.recipes;
    let result = pagination(recipes, selected);
    expect(result).toEqual({ currentItems: recipes, pages: 0 });
    expect(result.currentItems).toHaveLength(4);

    // 12 recipes  - pagination is not triggered
    recipes = allRecipes.recipes.concat(allRecipes.recipes, allRecipes.recipes);
    result = pagination(recipes, selected);
    expect(result).toEqual({ currentItems: recipes, pages: 0 });
  });

  test('should trigger if there is enough recipes', () => {
    let selected = 1;

    // 13 recipes  - pagination is triggered
    let recipes = allRecipes.recipes.concat(
      allRecipes.recipes,
      allRecipes.recipes,
      allRecipes.recipes[0]
    );
    let result = pagination(recipes, selected);
    expect(result.currentItems).toHaveLength(paginationItemsPerPage);
    expect(result.pages).toBe(2);

    // 25 recipes  - pagination is triggered
    recipes = allRecipes.recipes.concat(
      allRecipes.recipes,
      allRecipes.recipes,
      allRecipes.recipes,
      allRecipes.recipes,
      allRecipes.recipes,
      allRecipes.recipes[0]
    );
    result = pagination(recipes, selected);
    expect(result.currentItems).toHaveLength(paginationItemsPerPage);
    expect(result.pages).toBe(3);
  });
});
