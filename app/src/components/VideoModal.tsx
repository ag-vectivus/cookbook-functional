import React, { useEffect } from 'react';
import M from 'materialize-css';
import IVideo from '../ts/interfaces/IVideo';

const VideoModal: React.FC<{ recipe: IVideo }> = ({ recipe }) => {
  const { id, name, videoId } = recipe;

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div id={`videoModal-${id}`} className="modal" data-testid={`video-modal`}>
      <div className="modal-content">
        <h4>{name}</h4>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
