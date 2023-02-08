import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sound from '../images/sound.png';
import '../styles/notFoundPlaylist.css';

export default class NotFoundPlaylist extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="container-library-not-found">
        <section className="container-main-not-found">
          <img src={ sound } alt="Imagem Nota Musical" />
          <h2 className="container-title-create">Create your first playlist</h2>
          <h3>It&apos;s easy, we&apos;ll help you.</h3>
          <button
            type="button"
            onClick={ () => history.push('/search') }
          >
            Create playlist

          </button>
        </section>
      </div>

    );
  }
}

NotFoundPlaylist.propTypes = {
  history: PropTypes.func.isRequired,
};
