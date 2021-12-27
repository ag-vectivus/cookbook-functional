import React from 'react';

// interfaces
import IRecipe from '../../ts/interfaces/IRecipe';

const RecipeImage = (props: { recipe: IRecipe }) => {
  const { thumbnail, name } = props.recipe;
  return (
    <img
      src={thumbnail}
      alt={`Dish: ${name}`}
      width={'100%'}
      className="materialboxed responsive-img main__image"
    />
  );
};

export default RecipeImage;
