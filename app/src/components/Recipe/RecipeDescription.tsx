import React from 'react';
import parse from 'html-react-parser';

// interfaces
import IRecipe from '../../ts/interfaces/IRecipe';

const RecipeDescription = (props: { recipe: IRecipe }) => {
  const { date, instructions } = props.recipe;

  return (
    <section>
      <h5 className="main__heading">Instructions</h5>
      <div className="main__paragraph">{instructions}</div>
    </section>
  );
};

export default RecipeDescription;
