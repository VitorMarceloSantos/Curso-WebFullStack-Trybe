import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BsHeart } from 'react-icons/bs';
import '../styles/likedSongs.css';

export default class SongsLiked extends Component {
  render() {
    const { separateArtistsName, newAudio, removeFavorite } = this.props;

    return (
      <div style={ { marginLeft: '30px' } }>
        {separateArtistsName.map(({ previewUrl, trackName, artistName, trackId,
        }) => (
          <div
            className="container-button-play-music-musics"
            key={ trackName }
          >
            <div
              style={
                { display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '65vw' }
              }
            >
              <div style={ { display: 'flex' } }>
                <div>
                  <button
                    type="button"
                    value={ previewUrl }
                    onClick={ newAudio }
                    className="button-play-musics"
                  >
                    &#9658;
                  </button>
                </div>
                <div className="container-music-liked-song">
                  <h3>{trackName}</h3>
                  <h4>{artistName}</h4>
                </div>
              </div>
              <div className="container-liked-music-api">
                <button
                  type="button"
                  className="button-icon-add-heart-musics-api"
                  // value={ trackId }
                  onClick={ () => removeFavorite(trackId) }
                >
                  <BsHeart
                    className="icon-heart-favorite-musics-api-liked"
                  />
                </button>
                <p>...</p>
              </div>
            </div>

          </div>
        ))}

      </div>
    );
  }
}

SongsLiked.propTypes = {
  separateArtistsName: PropTypes.arrayOf.isRequired,
  newAudio: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};
