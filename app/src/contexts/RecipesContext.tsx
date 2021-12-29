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
    const localData = localStorage.getItem('recipes');
    if (localData !== null) {
      dispatchRecipe({
        type: 'GET_ALL_RECIPES',
        recipes: JSON.parse(localData),
      });
      return;
    }
    getData(`${endpoints.server}/recipes/all/`)
      .then((res) => {
        dispatchRecipe({ type: 'GET_ALL_RECIPES', recipes: res.recipes });
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  return (
    <RecipesContext.Provider value={{ recipes, dispatchRecipe }}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
