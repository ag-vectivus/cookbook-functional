import React from 'react';

// interfaces
import IRecipe from '../../ts/interfaces/IRecipe';
import RecipeHeading from './RecipeHeading';

const RecipeDescription = (props: { recipe: IRecipe }) => {
  const { date, instructions } = props.recipe;

  return (
    <RecipeHeading title="Instructions">
      <div className="main__paragraph">{instructions}</div>
    </RecipeHeading>
  );
};

export default RecipeDescription;
