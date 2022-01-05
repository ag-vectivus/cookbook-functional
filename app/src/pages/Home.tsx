import React from 'react';
import Aside from '../static/Aside/Aside';
import RecipeVideos from '../components/Pages/RecipeVideos';
import RecipeLatest from '../components/Pages/RecipeLatest';
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
