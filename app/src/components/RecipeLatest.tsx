import React, { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../contexts/RecipesContext';

// components
import MainSection from './MainSection';
import RecipeCard from './Cards/RecipeCard';
import Preloader from './Preloader';

// interfaces
import IRecipe from '../ts/interfaces/IRecipe';

// service
import getLatestRecipes from '../service/getLatestRecipes';

const RecipeLatest: React.FC = () => {
  const [latestRecipes, setLatestRecipes] = useState<IRecipe[]>([]);
  const { recipes } = useContext(RecipesContext);

  useEffect(() => {
    if (recipes.length > 0) {
      const randomVideos = getLatestRecipes(recipes, 4);
      setLatestRecipes(randomVideos);
    }

    return () => {
      setLatestRecipes([]);
    };
  }, [recipes]);

  return (
    <MainSection title="Latest Recipes">
      {latestRecipes.length > 0 ? (
        <div className="row">
          {latestRecipes.map((recipe, index) => {
            return (
              <div className="col s12 m6" key={`latest-recipe-card-${index}`}>
                <RecipeCard recipe={recipe} />
              </div>
            );
          })}
        </div>
      ) : (
        <Preloader />
      )}
    </MainSection>
  );
};

export default RecipeLatest;
