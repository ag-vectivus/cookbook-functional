import React, { useEffect, useState, useContext } from 'react';

// contexts
import { RecipesContext } from '../../contexts/RecipesContext';
import getRelatedRecipes from '../../service/getRelatedRecipes';

// interfaces
import IRecipe from '../../ts/interfaces/IRecipe';
import RecipeCard from '../Cards/RecipeCard';

// components
import RecipeHeading from './RecipeHeading';

const RecipeRelated = (props: { recipe: IRecipe }) => {
  const [content, setContent] = useState<IRecipe[]>([]);
  const { recipes } = useContext(RecipesContext);
  const { category, id } = props.recipe;

  useEffect(() => {
    if (recipes.length > 0) {
      const relatedRecipes = getRelatedRecipes(recipes, category, id);
      setContent(relatedRecipes);
    }

    return () => {
      setContent([]);
    };
  }, []);

  const forceUpdate = () => {
    window.location.reload();
  };

  return (
    <RecipeHeading title="Related recipes">
      <div className="row">
        {content.length > 0 ? (
          content.map((recipe) => {
            return (
              <div
                onClick={forceUpdate}
                className="col s12 m6 xl4"
                key={`related-recipe-${recipe.id}`}
                data-testid="related-recipe"
              >
                <RecipeCard recipe={recipe} />
              </div>
            );
          })
        ) : (
          <p className="center-align orange-text text-darken-4">
            It seems that there is no related recipes yet.
          </p>
        )}
      </div>
    </RecipeHeading>
  );
};

export default RecipeRelated;
