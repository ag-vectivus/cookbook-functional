import React from 'react';
import { Link } from 'react-router-dom';
import IRecipe from '../../ts/interfaces/IRecipe';
import IRecipeCard from '../../ts/interfaces/IRecipeCard';
import pathParser from '../../helpers/pathParser';
import setLinkPath from '../../service/setLinkPath';
import Image from '../Image';

const RecipeCard = (props: { recipe: IRecipe | IRecipeCard }): JSX.Element => {
  const { category, id, name, thumbnail } = props.recipe;
  const pathElements: string[] = pathParser(window.location.pathname);
  const url: string = setLinkPath(pathElements.length, category, id);

  return (
    <div className="card">
      <Link to={url} className="white-text truncate center-align">
        <div className="card-image">
          <Image alt={`Dish: ${name}`} src={thumbnail} />
        </div>
        <div className="card-action teal darken-4 truncate">{name}</div>
      </Link>
    </div>
  );
};

export default RecipeCard;
