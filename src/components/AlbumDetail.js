import React from 'react';

const AlbumDetail = ({ album }) => {
  const {
    title,
    coverArtArchive,
    firstReleaseDate,
  } = album.node;
  return (
    <li className="album">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={coverArtArchive.front} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://assets.fanart.tv/fanart/music/83d91898-7763-47d7-b03b-b92132375c47/artistthumb/pink-floyd-4fad917437146.jpg" alt="" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">
                {title}
              </p>
              <p className="subtitle is-6">
                {firstReleaseDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default AlbumDetail;
