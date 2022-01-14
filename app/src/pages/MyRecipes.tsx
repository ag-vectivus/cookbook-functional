import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipesContext } from '../contexts/RecipesContext';
import { AuthContext } from '../contexts/AuthContext';
import IRecipe from '../ts/interfaces/IRecipe';
import scrollToSelector from '../helpers/scrollToSelector';
import MainSection from '../components/Sections/MainSection';
import RecipeCard from '../components/Cards/RecipeCard';
import NoData from '../components/NoData';
import Pagination from '../modules/pagination/Pagination';
import pagination from '../service/pagination';

const MyRecipes = (): JSX.Element => {
  const [content, setContent] = useState<IRecipe[]>([]);
  const [paginationSelected, setPaginationSelected] = useState(1);
  const [paginationPages, setPaginationPages] = useState(1);
  const { recipes } = useContext(RecipesContext);
  const { auth } = useContext(AuthContext);

  const category = 'My recipes';
  const redirect = useNavigate();

  useEffect(() => {
    scrollToSelector('h4');
  }, [content]);

  useEffect(() => {
    if (recipes.length > 0) {
      const filteredRecipes: IRecipe[] = recipes.filter(
        (recipe) => recipe.authorUID === auth.uid
      );
      const { currentItems, pages } = pagination(
        filteredRecipes,
        paginationSelected
      );
      setContent(currentItems);
      setPaginationPages(pages);
    }

    return () => {
      setContent([]);
    };
  }, [recipes, paginationSelected, auth]);

  useEffect(() => {
    if (auth.uid === 'init') {
      redirect('/');
    }
  }, [auth]);

  return (
    <div className="container">
      <MainSection title={category}>
        <div className="row">
          {content.length > 0 ? (
            content.map((recipe) => {
              return (
                <div
                  className="col s6 m6 l4 xl3"
                  key={`recipe-${recipe.id}-link`}
                >
                  <RecipeCard recipe={recipe} />
                </div>
              );
            })
          ) : (
            <NoData />
          )}
        </div>
        <Pagination
          pages={paginationPages}
          selected={paginationSelected}
          handleSelected={setPaginationSelected}
        />
      </MainSection>
    </div>
  );
};

export default MyRecipes;
