import React, { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../contexts/RecipesContext';

// interfaces
import IRecipe from '../ts/interfaces/IRecipe';

// helpers
import pathParser from '../helpers/pathParser';

// components
import MainSection from '../components/MainSection';
import RecipeCard from '../components/Cards/RecipeCard';

// seo
import seo from '../config/seo';
import HelmetComponent from '../components/Helmet/HelmetComponent';

const Recipes = () => {
  const [content, setContent] = useState<IRecipe[]>([]);
  const { recipes } = useContext(RecipesContext);

  const category: string = pathParser(window.location.pathname).pop()!;

  useEffect(() => {
    if (recipes.length > 0) {
      const filteredRecipes: IRecipe[] = recipes.filter(
        (recipe) => recipe.category.toLowerCase() === category
      );
      setContent(filteredRecipes);
    }

    return () => {
      setContent([]);
    };
  }, [recipes]);

  return (
    <div className="container">
      <HelmetComponent title={`${seo.basicTitle} - Recipes`} />
      <MainSection title={category}>
        <div className="row">
          {content.map((recipe) => {
            return (
              <div
                className="col s6 m6 l4 xl3"
                key={`recipe-${recipe.id}-link`}
              >
                <RecipeCard recipe={recipe} />
              </div>
            );
          })}
        </div>
        {recipes.forEach((element) => {
          return <p>{element.name}</p>;
        })}
      </MainSection>
    </div>
  );
};

export default Recipes;
