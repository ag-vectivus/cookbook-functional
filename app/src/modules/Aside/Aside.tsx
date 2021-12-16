import React from 'react';

// components
import AsideAbout from './components/AsideAbout';
import AsideNewsletter from './components/AsideNewsletter';

const Aside = () => {
  return (
    <aside className="aside">
      <AsideAbout />
      <AsideNewsletter />
    </aside>
  );
};

export default Aside;
