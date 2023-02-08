import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SongsLiked from '../components/SongsLiked';
import separateAlbum from '../functions/separeteAlbum';
import '../styles/likedSongs.css';
import ButtonUpgrade from '../components/ButtonUpgrade';
import { removeSong } from '../services/favoriteSongsAPI';
import NotFoundPlaylist from '../components/NotFoundPlaylist';

export default class LikedSongs extends Component {
  state = {
    albumSaved: [],
    separateArtistsName: [],
    isPlay: false,
  }
  // previewUrl, trackName, artistName, trackId

  componentDidMount() {
    this.verifyFavoriteSongs();
  }

  verifyFavoriteSongs = () => {
    const favoriteAlbumSaved = JSON.parse(localStorage.getItem('likedSongs'));
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
    const newArray = albumSaved.filter(({ trackId }) => id !== trackId);
    await removeSong(id);
    this.savedLocalStorage('likedSongs', newArray);
    this.setState({ albumSaved: newArray }, () => {
      this.separateAlbum();
    });
  }

  render() {
    const { separateArtistsName } = this.state;
    const { history } = this.props;

    const newAudio = ({ target }) => {
      this.setState((prevState) => ({
        isPlay: !prevState.isPlay,
      }), () => {
        const { isPlay } = this.state;
        if (isPlay) {
          const audio = new Audio();
          audio.src = `${target.value}`;
          audio.play();
          this.setState({
            isMusic: audio,
          });
          target.textContent = 'II  ';
        } else {
          const { isMusic } = this.state;
          isMusic.pause();
          target.textContent = '\u25BA';
        }
      });
    };

    return (

      <div className="container-result-musics-api">
        <ButtonUpgrade />
        {separateArtistsName.length !== 0 ? (
          separateArtistsName.map((artist) => (
            <div key={ artist.trackId }>
              <h2 className="title-artist-liked-songs">
                {artist[0].artistName}
              </h2>
              <SongsLiked
                separateArtistsName={ artist }
                newAudio={ newAudio }
                removeFavorite={ this.removeFavorite }
              />
            </div>
          ))
        ) : (
          <div className="container-not-selected-your-library">
            <NotFoundPlaylist
              history={ history }
            />
          </div>)}
      </div>
    );
  }
}

LikedSongs.propTypes = {
  history: PropTypes.func.isRequired,
};
