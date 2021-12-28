import React from 'react';

// components
import Aside from '../modules/Aside/Aside';
import RecipeVideos from '../components/RecipeVideos';
import RecipeLatest from '../components/RecipeLatest';

const Home: React.FC = () => {
  return (
    <div className="container">
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
