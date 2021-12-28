import React, { useEffect, useState } from 'react';

// config
import endpoints from '../config/endpoints';

// api
import getData from '../api/getData';

// interfaces
import IRecipeCard from '../ts/interfaces/IRecipeCard';

// components
import MainSection from '../components/MainSection';
import RecipeCard from '../components/Cards/RecipeCard';

// seo
import seo from '../config/seo';
import HelmetComponent from '../components/Helmet/HelmetComponent';

const Categories = () => {
  const [content, setContent] = useState<IRecipeCard[]>([]);

  useEffect(() => {
    // scroll to top
    const top = document.querySelector('h4');
    const topPosition = top!.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: topPosition, behavior: 'smooth' });
  }, [content]);

  useEffect(() => {
    getData(`${endpoints.server}/recipes/categories/`)
      .then((res) => {
        const updatedRes: IRecipeCard[] = res.categories.map(
          (singleCategory: IRecipeCard) => {
            return Object.assign(singleCategory, {
              category: singleCategory.name,
            });
          }
        );
        setContent(updatedRes);
      })
      .catch((err) => console.log(err.message));

    return () => {
      setContent([]);
    };
  }, []);

  return (
    <div className="container">
      <HelmetComponent title={`${seo.basicTitle} - Categories`} />
      <MainSection title="categories">
        <div className="row">
          {content.map((recipe) => {
            return (
              <div
                className="col s6 m6 l4 xl3"
                key={`recipes-${recipe.name}-link`}
              >
                <RecipeCard recipe={recipe} />
              </div>
            );
          })}
        </div>
      </MainSection>
    </div>
  );
};

export default Categories;
