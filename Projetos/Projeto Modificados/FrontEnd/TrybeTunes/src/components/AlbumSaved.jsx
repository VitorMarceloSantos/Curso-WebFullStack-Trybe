import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardLibrary from './CardLibrary';

export default class AlbumSaved extends Component {
  render() {
    const { albumSaved, removeFavorite } = this.props;
    return (
      <div>
        <CardLibrary
          key={ `${albumSaved[0].collectionId}-${albumSaved[0].artistName}` }
          arraySearch={ albumSaved }
          nameArtist={ albumSaved[0].artistName }
          removeFavorite={ removeFavorite }
        />
      </div>
    );
  }
}

AlbumSaved.propTypes = {
  albumSaved: PropTypes.arrayOf.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};
