import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BsHeart } from 'react-icons/bs';

export default class MusicPlayer extends Component {
  render() {
    const {
      randomSelectMusic,
      randomMusic,
      albumSaved,
      resultSearch,
      favoriteAlbum,
    } = this.props;
    return (
      <div className="container-musics-player">
        <div
          className="container-button-play-music-musics"
        >
          <button
            type="button"
            value={ randomSelectMusic.previewUrl }
            onClick={ randomMusic }
            className="button-play-musics"
          >
            &#9658;
          </button>
        </div>
        <button
          type="button"
          className="button-icon-add-heart-musics"
        >
          <BsHeart
            className={ `icon-heart-favorite-musics 
                    ${albumSaved !== null
        ? (albumSaved
          .some(({ collectionId: id }) => (id === resultSearch[0].collectionId))
                      && 'icon-heart-favorite-musics-api-selected') : null}` }
            onClick={ () => {
              favoriteAlbum(resultSearch[0].collectionId,
                resultSearch[0].collectionName,
                resultSearch[0].artistName, resultSearch[0].artworkUrl100);
            } }
          />
        </button>
        <p>...</p>
        <div className="container-name-music-random">
          <div className="add-sound-gif" />
          {randomSelectMusic.name !== undefined && (
            <p>{`Song: ${randomSelectMusic.name}`}</p>
          )}
        </div>
      </div>
    );
  }
}
MusicPlayer.propTypes = {
  randomSelectMusic: PropTypes.arrayOf.isRequired,
  randomMusic: PropTypes.func.isRequired,
  albumSaved: PropTypes.arrayOf.isRequired,
  resultSearch: PropTypes.arrayOf.isRequired,
  favoriteAlbum: PropTypes.func.isRequired,
};
