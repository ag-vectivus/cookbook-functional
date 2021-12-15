import React, { useContext, useEffect } from 'react';
import { RecipesContext } from '../contexts/RecipesContext';

// api
import getData from '../api/getData';

// config
import endpoints from '../config/endpoints';

const Home: React.FC = () => {
  const { recipes, dispatchRecipe } = useContext(RecipesContext);

  useEffect(() => {
    getData(`${endpoints.server}/recipes/all/`)
      .then((res) => {
        dispatchRecipe({ type: 'GET_ALL_RECIPES', recipes: res.recipes });
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="container">
      <h1>CookBook</h1>
      <div className="row">
        {recipes.length > 0 ? (
          <ul>
            {recipes.map((recipe) => {
              return <li key={recipe.name}>{recipe.name}</li>;
            })}
          </ul>
        ) : (
          'There is no content yet...'
        )}
      </div>
    </div>
  );
};

export default Home;
