import React, { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../contexts/RecipesContext';
import VideoCard from './Cards/VideoCard';
import Preloader from './Preloader';
import IVideo from '../ts/interfaces/IVideo';
import getRandomVideos from '../service/getRandomVideos';
import MainSection from './MainSection';

const RecipeVideos: React.FC = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const { recipes } = useContext(RecipesContext);

  useEffect(() => {
    if (recipes.length > 0) {
      const randomVideos = getRandomVideos(recipes, 3);
      setVideos(randomVideos);
    }

    return () => {
      setVideos([]);
    };
  }, [recipes]);

  return (
    <MainSection title="Recipe Videos">
      {videos.length > 0 ? (
        <div className="row">
          {videos.map((video, index) => {
            return (
              <div
                className="main__video col s12 m6 xl4"
                key={`video-card-${index}`}
              >
                <VideoCard video={video} pulse={false} />
              </div>
            );
          })}
        </div>
      ) : (
        <Preloader />
      )}
    </MainSection>
  );
};

export default RecipeVideos;
