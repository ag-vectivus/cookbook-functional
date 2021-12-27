import React from 'react';

// service
import ingredientsArray from '../../service/ingredientsArray';

// interfaces
import IRecipe from '../../ts/interfaces/IRecipe';

const RecipeIngredients = (props: { recipe: IRecipe }) => {
  const { recipe } = props;
  const { name } = recipe;

  const ingredients = ingredientsArray(recipe, 'ingredient');
  const measures = ingredientsArray(recipe, 'measure');

  return (
    <section>
      <h5 className="main__heading">Ingredients</h5>
      <ul className="main__list main__list--margin-x">
        {ingredients.map((ingredient, index) => {
          return (
            <li key={`ingredient-${index}-${name}`}>
              {measures[index]} - {ingredient}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RecipeIngredients;
