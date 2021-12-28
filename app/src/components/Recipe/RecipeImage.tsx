import React from 'react';

// interfaces
import IRecipe from '../../ts/interfaces/IRecipe';

// components
import Image from '../Image/Image';

const RecipeImage = (props: { recipe: IRecipe }) => {
  const { thumbnail, name } = props.recipe;
  return (
    <Image
      src={thumbnail}
      alt={`Dish: ${name}`}
      className="materialboxed main__image"
    />
  );
};

export default RecipeImage;
