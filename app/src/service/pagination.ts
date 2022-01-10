import paginationItemsPerPage from '../config/paginationItemsPerPage';
import IRecipe from '../ts/interfaces/IRecipe';

const pagination = (recipes: IRecipe[], selected: number) => {
  let pages: number = 0;
  let currentItems: IRecipe[] = [];
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
