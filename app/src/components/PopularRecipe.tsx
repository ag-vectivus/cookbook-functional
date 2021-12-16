import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

// helpers
import pathParser from '../helpers/pathParser';

// service
import setLinkPath from '../service/setLinkPath';

// interfaces
import IPopularRecipe from '../ts/interfaces/IPopularRecipe';

const PopularRecipe = (props: { recipe: IPopularRecipe }) => {
  const { id, name, thumbnail, category, views } = props.recipe;
  const pathElements: string[] = pathParser(window.location.pathname);
  const url: string = setLinkPath(pathElements.length, category, id);

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <li className="collection-item avatar">
      <img
        src={thumbnail}
        alt={`miniature: ${name}`}
        className="circle materialboxed"
      />
      <Link to={url}>
        <span className="title orange-text text-darken-4 truncate">{name}</span>
      </Link>
      <p className="orange-text text-darken-4 truncate">{`views: ${views}`}</p>
    </li>
  );
};

export default PopularRecipe;
