import paginationItemsPerPage from '../config/paginationItemsPerPage';
import IRecipe from '../ts/interfaces/IRecipe';

type PaginationResult = {
  currentItems: IRecipe[];
  pages: number;
};

const pagination = (recipes: IRecipe[], selected: number): PaginationResult => {
  const pages = 0;
  const currentItems: IRecipe[] = recipes;
  const result = { currentItems, pages };

  if (recipes.length > paginationItemsPerPage) {
    const indexOfLastItem: number = selected * paginationItemsPerPage;
    const indexOfFirstItem: number = indexOfLastItem - paginationItemsPerPage;

    result.currentItems = recipes.slice(indexOfFirstItem, indexOfLastItem);
    result.pages = Math.ceil(recipes.length / paginationItemsPerPage);
  }

  return result;
};

export default pagination;
