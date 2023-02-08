import React, { Component } from 'react';
import PropTypes from 'prop-types';
import notFound from '../images/notFound.png';
import '../styles/notFoundPlaylist.css';

export default class musicNotFound extends Component {
  render() {
    const { resetInputSearch } = this.props;
    return (
      <div className="container-music-not-found">
        <section className="container-main-not-found">
          <img src={ notFound } alt="Imagem Not Found" />
          <h2 className="container-title-create">Songs not found.</h2>
          <h3>Please do a new Search.</h3>
          <button
            type="button"
            onClick={ () => resetInputSearch() }
          >
            New Search
          </button>
        </section>
      </div>

    );
  }
}

musicNotFound.propTypes = {
  resetInputSearch: PropTypes.func.isRequired,
};
