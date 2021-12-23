import React from 'react';
import { Link } from 'react-router-dom';

// interfaces
import IRecipe from '../../ts/interfaces/IRecipe';
import IRecipeCard from '../../ts/interfaces/IRecipeCard';

// helpers
import pathParser from '../../helpers/pathParser';

// service
import setLinkPath from '../../service/setLinkPath';

const RecipeCard = (props: { recipe: IRecipe | IRecipeCard }) => {
  const { category, id, name, thumbnail } = props.recipe;
  const pathElements: string[] = pathParser(window.location.pathname);
  const url: string = setLinkPath(pathElements.length, category, id);

  return (
    <div className="card">
      <Link to={url} className="white-text truncate center-align">
        <div className="card-image">
          <img
            src={thumbnail}
            alt={`Dish: ${name}`}
            className="responsive-img"
          />
        </div>
        <div className="card-action teal darken-4 truncate">{name}</div>
      </Link>
    </div>
  );
};

export default RecipeCard;
