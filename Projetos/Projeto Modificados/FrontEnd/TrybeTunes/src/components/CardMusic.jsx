import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/cardMusics.css';

export default class CardMusics extends Component {
  render() {
    const { element } = this.props;
    return (
      <div className="container-geral-cards">
        <div className="container-carousel-musics">
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
        </div>
      </div>
    );
  }
}

CardMusics.propTypes = {
  element: PropTypes.arrayOf.isRequired,
};
