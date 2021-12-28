import React, { createContext, useReducer, Dispatch, useEffect } from 'react';
import getData from '../api/getData';
import endpoints from '../config/endpoints';
import { RecipeReducer } from '../reducers/RecipeReducer';

// interfaces
import IRecipe from '../ts/interfaces/IRecipe';
import IRecipeAction from '../ts/interfaces/IRecipeAction';

// type aliases
type ContextType = {
  recipes: IRecipe[];
  dispatchRecipe: Dispatch<IRecipeAction>;
};

// create context
export const RecipesContext = createContext<ContextType>(null!);

const RecipesContextProvider: React.FC = ({ children }) => {
  const [recipes, dispatchRecipe] = useReducer(RecipeReducer, []);

  useEffect(() => {
    getData(`${endpoints.server}/recipes/all/`)
      .then((res) => {
        dispatchRecipe({ type: 'GET_ALL_RECIPES', recipes: res.recipes });
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <RecipesContext.Provider value={{ recipes, dispatchRecipe }}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
