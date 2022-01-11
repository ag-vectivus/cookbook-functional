import React, { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../contexts/RecipesContext';
import MainSection from '../components/Sections/MainSection';
import RecipeImage from '../components/Recipe/RecipeImage';
import RecipeVideo from '../components/Recipe/RecipeVideo';
import RecipeRelated from '../components/Recipe/RecipeRelated';
import RecipeBreadcrumb from '../components/Recipe/RecipeBreadcrumb';
import RecipeDescription from '../components/Recipe/RecipeDescription';
import RecipeIngredients from '../components/Recipe/RecipeIngredients';
import Aside from '../static/Aside/Aside';
import IRecipe from '../ts/interfaces/IRecipe';
import pathParser from '../helpers/pathParser';
import scrollToSelector from '../helpers/scrollToSelector';
import RecipeShareButtons from '../components/Recipe/RecipeShareButtons';
import HelmetComponent from '../components/Helmet/HelmetComponent';
import seo from '../config/seo';

const Recipe = (): JSX.Element => {
  const { recipes } = useContext(RecipesContext);
  const [recipe, setRecipe] = useState<IRecipe>(null!);
  const [recipeId, setRecipeId] = useState('');

  useEffect(() => {
    scrollToSelector('#breadcrumb');
  }, [recipeId]);

  useEffect(() => {
    // get recipe id and change state
    const path: string = window.location.pathname;
    const id: string = pathParser(path).pop()!;
    setRecipeId(id);

    return () => {
      setRecipeId('');
    };
  }, []);

  useEffect(() => {
    // get recipe to display from recipes
    const currentRecipe = recipes.find((recipe) => recipe.id === recipeId);
    if (currentRecipe !== undefined) {
      setRecipe(currentRecipe);
    }

    return () => {
      setRecipe(null!);
    };
  });

  const forceUpdate = () => {
    const path: string = window.location.pathname;
    const id: string = pathParser(path).pop()!;

    setRecipeId(id);
  };

  return (
    <React.Fragment>
      <span id="breadcrumb">
        {recipe !== null ? <RecipeBreadcrumb recipe={recipe} /> : null}
      </span>

      <div className="container">
        <div className="row">
          <div className="col s12 l8">
            {recipe !== null ? (
              <MainSection title={recipe.name}>
                <HelmetComponent
                  title={`${seo.basicTitle} - ${recipe.name}`}
                  description={`${recipe.category} dish: ${recipe.name}`}
                />
                <RecipeImage recipe={recipe} />
                <RecipeIngredients recipe={recipe} />
                <RecipeDescription recipe={recipe} />
                <RecipeVideo recipe={recipe} />
                <RecipeShareButtons recipe={recipe} />
                <span onClick={forceUpdate}>
                  <RecipeRelated recipe={recipe} />
                </span>
              </MainSection>
            ) : (
              <MainSection title={`Recipe: ${recipeId}`}>
                <p>There is no recipe like this.</p>
              </MainSection>
            )}
          </div>
          <div className="col s12 l4" onClick={forceUpdate}>
            <Aside />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Recipe;
