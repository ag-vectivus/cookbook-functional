import React, { createContext, useReducer, Dispatch } from 'react';
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

  return (
    <RecipesContext.Provider value={{ recipes, dispatchRecipe }}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
