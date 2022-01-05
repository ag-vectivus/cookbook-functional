import React from 'react';
import AsideAbout from './components/AsideAbout';
import AsideNewsletter from './components/AsideNewsletter';
import AsidePopularRecipes from './components/AsidePopularRecipes';

const Aside = () => {
  return (
    <aside className="aside">
      <AsideAbout />
      <AsideNewsletter />
      <AsidePopularRecipes />
    </aside>
  );
};

export default Aside;
