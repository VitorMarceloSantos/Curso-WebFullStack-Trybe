import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BsHeart } from 'react-icons/bs';

export default class MusicsList extends Component {
  render() {
    const { resultSearch, targetNewAudio, favoriteSong, favorteSongSaved } = this.props;
    return (
      <div className="container-musics-songs-list">
        <p># TITLE</p>
        <div className="line-border" />
        <div className="container-result-musics-api">
          {(resultSearch.slice(1, resultSearch.length))
            .map(({ previewUrl, trackName, artistName, trackId,
            }) => (
              <div
                className="container-button-play-music-musics"
                key={ trackName }
              >
                <div style={ { display: 'flex' } }>
                  <button
                    type="button"
                    value={ previewUrl }
                    onClick={ targetNewAudio }
                    className="button-play-musics"
                  >
                    &#9658;
                  </button>
                  <div>
                    <h3>{trackName}</h3>
                    <h4>{artistName}</h4>
                  </div>
                </div>
                <div className="container-liked-music-api">
                  <button
                    type="button"
                    className="button-icon-add-heart-musics-api"
                    value={ trackId }
                    onClick={ () => {
                      favoriteSong(
                        trackId, previewUrl, trackName, artistName,
                      );
                    } }
                  >
                    <BsHeart
                      className={ `icon-heart-favorite-musics-api 
                          ${favorteSongSaved !== null
                ? (favorteSongSaved
                  .some((id) => (id === trackId))
                            && 'icon-heart-favorite-musics-api-selected') : null}` }
                    />
                  </button>
                  <p>...</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
MusicsList.propTypes = {
  resultSearch: PropTypes.arrayOf.isRequired,
  targetNewAudio: PropTypes.func.isRequired,
  favoriteSong: PropTypes.arrayOf.isRequired,
  favorteSongSaved: PropTypes.arrayOf.isRequired,
};
