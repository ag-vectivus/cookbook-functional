import React from 'react';
import { Link } from 'react-router-dom';
import IRecipe from '../../ts/interfaces/IRecipe';

const RecipeBreadcrumb = (props: { recipe: IRecipe }) => {
  const { category, id, name } = props.recipe;

  return (
    <nav className="orange darken-2">
      <div className="nav-wrapper">
        <div className="container">
          <div className="col s10 main__breadcrumb">
            <Link to={`/recipes`} className="breadcrumb">
              Recipes
            </Link>
            <Link
              to={`/recipes/${category.toLowerCase()}`}
              className="breadcrumb"
            >
              {category}
            </Link>
            <Link to={`/recipes/${category}/${id}`} className="breadcrumb">
              {name}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default RecipeBreadcrumb;
