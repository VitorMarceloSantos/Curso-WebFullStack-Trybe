import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/cardMusics.css';

export default class CardMusics extends Component {
  render() {
    const { arraySearch, nameArtist } = this.props;
    return (
      <div className="container-geral-cards">
        <h2 className="title-container-card">{nameArtist}</h2>
        <div className="container-carousel-musics">
          {arraySearch.map((element) => (
            <div className="container-card-music" key={ element.collectionId }>
              <Link
                data-testid={ `link-to-album-${element.collectionId}` }
                to={ `/album/${element.collectionId}` }
                key={ element.collectionId }
              >
                {/* Informações do artista */}
                <img src={ element.artworkUrl100 } alt={ element.collectionId } />
                <h3>{element.artistName}</h3>
                <h4>{element.collectionName}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

CardMusics.propTypes = {
  arraySearch: PropTypes.arrayOf.isRequired,
  nameArtist: PropTypes.string.isRequired,
};
