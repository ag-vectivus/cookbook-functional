import React from 'react';

// interfaces
import IVideo from '../../ts/interfaces/IVideo';
import IRecipe from '../../ts/interfaces/IRecipe';

// components
import VideoCard from '../Cards/VideoCard';
import RecipeHeading from './RecipeHeading';

// service
import getVideoId from '../../service/getVideoId';

const RecipeVideo = (props: { recipe: IRecipe }) => {
  const { name, category, id, video } = props.recipe;
  const videoId = getVideoId(video);

  const videoData: IVideo = {
    id,
    name,
    videoId,
    category,
  };

  return (
    <RecipeHeading title="video">
      <div className="main__image">
        <VideoCard video={videoData} pulse={true} />
      </div>
    </RecipeHeading>
  );
};

export default RecipeVideo;
