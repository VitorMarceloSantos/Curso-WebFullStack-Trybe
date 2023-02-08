import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/cardLibrary.css';
import { BsTrash } from 'react-icons/bs';

export default class CardLibrary extends Component {
  render() {
    const { arraySearch, nameArtist, removeFavorite } = this.props;
    return (
      <div className="container-geral-cards">
        <h2 className="title-container-card">{nameArtist}</h2>
        <div className="container-carousel-musics-library">
          {arraySearch.map((element) => (
            <div className="container-card-album-library" key={ element.collectionId }>
              <div className="container-card-music-library">
                <Link
                  data-testid={ `link-to-album-${element.collectionId}` }
                  to={ `/album/${element.collectionId}` }
                  key={ element.collectionId }
                >
                  <img src={ element.artworkUrl100 } alt={ element.collectionId } />
                  <h3>{element.artistName}</h3>
                  <h4>{element.collectionName}</h4>
                </Link>
              </div>
              <button
                type="button"
                className="button-trash"
                value={ element.collectionId }
                onClick={ () => removeFavorite(element.collectionId) }
              >
                <BsTrash className="container-trash-library" />
              </button>
            </div>

          ))}
        </div>
      </div>
    );
  }
}

CardLibrary.propTypes = {
  arraySearch: PropTypes.arrayOf.isRequired,
  nameArtist: PropTypes.string.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};
