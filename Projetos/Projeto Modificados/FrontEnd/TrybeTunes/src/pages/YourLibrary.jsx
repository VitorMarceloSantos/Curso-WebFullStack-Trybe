import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/yourLibrary.css';
import AlbumSaved from '../components/AlbumSaved';
import NotFoundPlaylist from '../components/NotFoundPlaylist';
import separateAlbum from '../functions/separeteAlbum';

export default class YourLibrary extends Component {
  state = {
    albumSaved: [],
    separateArtistsName: [],
  }

  componentDidMount() {
    this.verifyFavoriteSongs();
  }

  verifyFavoriteSongs = () => {
    const favoriteAlbumSaved = JSON.parse(localStorage.getItem('favorite_album'));
    this.setState({
      albumSaved: favoriteAlbumSaved,
    }, () => {
      const { albumSaved } = this.state;
      if (albumSaved !== null) this.separateAlbum();
    });
  };

  separateAlbum = () => {
    const { albumSaved } = this.state;
    const arrayAlbums = separateAlbum(albumSaved);
    this.setState({ separateArtistsName: arrayAlbums });
  }

  savedLocalStorage = (key, state) => {
    localStorage.setItem(key, JSON
      .stringify(state));
  }

  removeFavorite = async (id) => {
    const { albumSaved } = this.state;
    const newArray = albumSaved.filter(({ collectionId }) => id !== collectionId);
    this.savedLocalStorage('favorite_album', newArray);
    this.setState({ albumSaved: newArray }, () => {
      this.separateAlbum();
    });
  }

  render() {
    const { separateArtistsName } = this.state;
    const { history } = this.props;
    return (
      <div className="container-main-your-library">
        <nav className="container-nav-yourLibrary">
          <ul>
            <li>
              <button type="button">Playlists</button>
            </li>
            <li>
              <button type="button">Podcasts</button>
            </li>
            <li>
              <button type="button">Artists</button>
            </li>
            <li>
              <button type="button">Albums</button>
            </li>
          </ul>
        </nav>
        <section className="container-your-library-album">
          {separateArtistsName.length !== 0 ? (
            separateArtistsName.map((album) => (
              <AlbumSaved
                key={ album.collectionId }
                albumSaved={ album }
                removeFavorite={ this.removeFavorite }
              />
            ))
          )
            : (
              <div className="container-not-selected-your-library">
                <NotFoundPlaylist
                  history={ history }
                />
              </div>
            )}
        </section>
      </div>

    );
  }
}

YourLibrary.propTypes = {
  history: PropTypes.func.isRequired,
};
