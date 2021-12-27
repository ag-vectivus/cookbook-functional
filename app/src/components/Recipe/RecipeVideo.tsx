import React from 'react';

// interfaces
import IVideo from '../../ts/interfaces/IVideo';
import IRecipe from '../../ts/interfaces/IRecipe';

// components
import VideoCard from '../Cards/VideoCard';
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
    <section>
      <h5 className="main__heading">Video</h5>
      <div className="main__image">
        <VideoCard video={videoData} pulse={true} />
      </div>
    </section>
  );
};

export default RecipeVideo;
