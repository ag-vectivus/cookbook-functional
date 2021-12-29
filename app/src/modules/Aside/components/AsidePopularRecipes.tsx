import React, { useState, useEffect } from 'react';

// components
import PopularRecipe from '../../../components/PopularRecipe';
import AsideSection from '../../../components/AsideSection';
import Preloader from '../../../components/Preloader';

// interfaces
import IPopularRecipe from '../../../ts/interfaces/IPopularRecipe';

// config
import endpoints from '../../../config/endpoints';

// api
import getData from '../../../api/getData';

const AsidePopularRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('popular');
    if (localData !== null) {
      setPopularRecipes(JSON.parse(localData));
      return;
    }

    getData(`${endpoints.server}/recipes/popular/`)
      .then((res) => {
        setPopularRecipes(res.popular);
      })
      .catch((err) => console.log(err.message));

    return () => {
      setPopularRecipes([]);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('popular', JSON.stringify(popularRecipes));
  }, [popularRecipes]);

  return (
    <AsideSection title="Popular recipes">
      {popularRecipes.length > 0 ? (
        <ul className="collection">
          {popularRecipes.map((recipe: IPopularRecipe, index: number) => {
            return (
              <PopularRecipe recipe={recipe} key={`popular-recipe-${index}`} />
            );
          })}
        </ul>
      ) : (
        <Preloader />
      )}
    </AsideSection>
  );
};

export default AsidePopularRecipes;
