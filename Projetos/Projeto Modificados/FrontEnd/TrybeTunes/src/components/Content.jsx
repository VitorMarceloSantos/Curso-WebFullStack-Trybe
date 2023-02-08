import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Header from './Header';
import Home from '../pages/Home';
import '../styles/header.css';
import '../styles/content.css';
import SearchBar from '../pages/SearchBar';
import YourLibrary from '../pages/YourLibrary';
import Musics from '../pages/Musics';
import LikedSongs from '../pages/LikedSongs';

export default class Content extends Component {
  render() {
    return (
      <div>

        <section className="container-content">
          <div className="container-albuns-cards">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/search" component={ SearchBar } />
              <Route exact path="/library" component={ YourLibrary } />
              <Route exact path="/album/:id" component={ Musics } />
              <Route exact path="/favorites" component={ LikedSongs } />
            </Switch>
          </div>
        </section>
      </div>

    );
  }
}
