import React, { Component } from 'react';
import { AiFillHome, AiOutlineSearch, AiFillHeart } from 'react-icons/ai';
import { VscLibrary } from 'react-icons/vsc';
import { SiAddthis } from 'react-icons/si';
import { Link } from 'react-router-dom';
import '../styles/sideBar.css';

class SideBar extends Component {
  render() {
    return (
      <nav data-testid="header-component" className="container-sideBar-style">
        <ul>
          <li>
            <AiFillHome className="icon-sideBar" />
            <Link to="/" className="text-sideBar">Home</Link>
          </li>
          <li>
            <AiOutlineSearch className="icon-sideBar" />
            <Link to="/search" className="text-sideBar">Search</Link>
          </li>
          <li>
            <VscLibrary className="icon-sideBar" />
            <Link to="/library" className="text-sideBar">Your Library</Link>
          </li>
          <li className="icon-list-sup">
            <SiAddthis className="icon-sideBar-add" />
            <Link to="/search" className="text-sideBar">Create Playlist</Link>
          </li>
          <li className="icon-list-inf">
            <div className="container-heart">
              <AiFillHeart className="icon-sideBar-heart" />
            </div>
            <Link to="/favorites" className="text-sideBar">Liked Song</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideBar;
