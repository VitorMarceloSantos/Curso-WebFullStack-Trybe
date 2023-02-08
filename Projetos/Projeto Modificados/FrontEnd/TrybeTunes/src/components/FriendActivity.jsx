import React, { Component } from 'react';
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai';
import '../styles/friendActivity.css';

export default class FriendActivity extends Component {
  render() {
    return (
      <section className="container-friend-activity">
        <div className="container-friend-title">
          <h2>Friend Activity</h2>
          <AiOutlineUserAdd className="icon-friend" />
        </div>
        <p className="friend-text">
          Let friends and
          followers on Spotify see what you&apos;re listening to.
        </p>
        <div className="container-users">
          <div className="container-border-friend">
            <div className="container-cicle-blue1">
              <p> </p>
            </div>
            <AiOutlineUser className="icon-friend-user" />
          </div>
          <div className="container-lines-gray">
            <div className="line-gray-sup"><p> </p></div>
            <div className="line-gray-inf"><p> </p></div>
            <div className="line-gray-inf"><p> </p></div>
          </div>
        </div>
        <div className="container-users">
          <div className="container-border-friend">
            <div className="container-cicle-blue2">
              <p> </p>
            </div>
            <AiOutlineUser className="icon-friend-user" />
          </div>
          <div className="container-lines-gray">
            <div className="line-gray-sup"><p> </p></div>
            <div className="line-gray-inf"><p> </p></div>
            <div className="line-gray-inf"><p> </p></div>
          </div>
        </div>
        <div className="container-users">
          <div className="container-border-friend">
            <AiOutlineUser className="icon-friend-user" />
          </div>
          <div className="container-lines-gray">
            <div className="line-gray-sup"><p> </p></div>
            <div className="line-gray-inf"><p> </p></div>
            <div className="line-gray-inf"><p> </p></div>
          </div>
        </div>
        <p className="friend-text text-inf">
          Go to Settings &gt; Social enable &apos;Share my
          listening activity on Spotify&apos;.You can turn this off at any time.
        </p>
        <button type="button">SETTINGS</button>
      </section>
    );
  }
}
