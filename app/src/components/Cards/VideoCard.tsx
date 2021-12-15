import React from 'react';
import { Link } from 'react-router-dom';

// interfaces
import IVideo from '../../ts/interfaces/IVideo';

const VideoCard = (props: { video: IVideo }) => {
  const { id, name, videoId, category } = props.video;
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
          alt={`video thumbnail: ${name}`}
          className="responsive-img"
        />
        <a
          href=""
          className="btn-floating halfway-fab waves-effect waves-light red"
        >
          <i className="material-icons">play_circle</i>
        </a>
      </div>
      <div className="main__caption center-align card-action truncate">
        <Link
          to={`/recipes/${category}/${id}`}
          className="orange-text text-darken-4"
        >
          {name}
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
