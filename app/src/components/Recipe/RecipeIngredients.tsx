import React from 'react';

// service
import ingredientsArray from '../../service/ingredientsArray';

// interfaces
import IRecipe from '../../ts/interfaces/IRecipe';

// components
import RecipeHeading from './RecipeHeading';

const RecipeIngredients = (props: { recipe: IRecipe }) => {
  const { recipe } = props;
  const { name } = recipe;

  const ingredients = ingredientsArray(recipe, 'ingredient');
  const measures = ingredientsArray(recipe, 'measure');

  return (
    <RecipeHeading title="Ingredients">
      <ul className="main__list main__list--margin-x">
        {ingredients.map((ingredient, index) => {
          return (
            <li key={`ingredient-${index}-${name}`}>
              {measures[index]} - {ingredient}
            </li>
          );
        })}
      </ul>
    </RecipeHeading>
  );
};

export default RecipeIngredients;
