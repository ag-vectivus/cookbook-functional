import React from 'react';
import { Link } from 'react-router-dom';

// interfaces
import IVideo from '../../ts/interfaces/IVideo';

// helpers
import pathParser from '../../helpers/pathParser';

// service
import setLinkPath from '../../service/setLinkPath';

// components
import VideoModal from '../VideoModal';

const VideoCard = (props: { video: IVideo; pulse: boolean }) => {
  const { id, name, videoId, category } = props.video;
  const pathElements: string[] = pathParser(window.location.pathname);
  const url: string = setLinkPath(pathElements.length, category, id);

  return (
    <div className="card">
      <div className="card-image">
        <img
          src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
          alt={`video thumbnail: ${name}`}
          className="responsive-img"
        />
        <a
          href={`#videoModal-${id}`}
          className={`btn-floating halfway-fab waves-effect ${
            props.pulse ? 'btn-floating pulse' : ''
          } waves-light red modal-trigger`}
          data-testid={`video-modal-trigger`}
        >
          <i className="material-icons">play_circle</i>
        </a>
      </div>
      <div className="main__caption center-align card-action truncate">
        <Link to={url} className="orange-text text-darken-4">
          {name}
        </Link>
      </div>
      <VideoModal recipe={props.video} />
    </div>
  );
};

export default VideoCard;
