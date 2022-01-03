import React from 'react';

// components
import Aside from '../static/Aside/Aside';
import RecipeVideos from '../components/RecipeVideos';
import RecipeLatest from '../components/RecipeLatest';

// seo
import seo from '../config/seo';
import HelmetComponent from '../components/Helmet/HelmetComponent';

const Home: React.FC = () => {
  return (
    <div className="container">
      <HelmetComponent
        title={seo.basicTitle}
        description={seo.homeDescription}
      />
      <div className="row">
        <div className="col s12 l8">
          <main className="main">
            <RecipeVideos />
            <RecipeLatest />
          </main>
        </div>
        <div className="col s12 l4">
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default Home;
