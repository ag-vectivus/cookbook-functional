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

// helpers
import scrollToSelector from '../helpers/scrollToSelector';

const Categories = () => {
  const [content, setContent] = useState<IRecipeCard[]>([]);

  useEffect(() => {
    scrollToSelector('h4');
  }, [content]);

  useEffect(() => {
    const localData = localStorage.getItem('categories');
    if (localData !== null) {
      setContent(JSON.parse(localData));
      return;
    }

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

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(content));
  }, [content]);

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
