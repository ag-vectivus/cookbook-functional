import React, { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../contexts/RecipesContext';
import IRecipe from '../ts/interfaces/IRecipe';
import pathParser from '../helpers/pathParser';
import scrollToSelector from '../helpers/scrollToSelector';
import MainSection from '../components/Sections/MainSection';
import RecipeCard from '../components/Cards/RecipeCard';
import seo from '../config/seo';
import HelmetComponent from '../components/Helmet/HelmetComponent';
import NoData from '../components/NoData';

const Recipes = () => {
  const [content, setContent] = useState<IRecipe[]>([]);
  const { recipes } = useContext(RecipesContext);

  const category: string = pathParser(window.location.pathname).pop()!;

  useEffect(() => {
    scrollToSelector('h4');
  }, [content]);

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
          {content.length > 0 ? (
            content.map((recipe) => {
              return (
                <div
                  className="col s6 m6 l4 xl3"
                  key={`recipe-${recipe.id}-link`}
                >
                  <RecipeCard recipe={recipe} />
                </div>
              );
            })
          ) : (
            <NoData />
          )}
        </div>
        {recipes.forEach((element) => {
          return <p>{element.name}</p>;
        })}
      </MainSection>
    </div>
  );
};

export default Recipes;
