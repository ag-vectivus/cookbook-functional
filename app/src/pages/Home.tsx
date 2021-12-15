import React, { useContext, useEffect } from 'react';
import { RecipesContext } from '../contexts/RecipesContext';

// api
import getData from '../api/getData';

// config
import endpoints from '../config/endpoints';

// components
import RecipeVideos from '../components/RecipeVideos';

const Home: React.FC = () => {
  const { dispatchRecipe } = useContext(RecipesContext);

  useEffect(() => {
    getData(`${endpoints.server}/recipes/all/`)
      .then((res) => {
        dispatchRecipe({ type: 'GET_ALL_RECIPES', recipes: res.recipes });
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <main className="main">
          <RecipeVideos />
        </main>
      </div>
    </div>
  );
};

export default Home;
