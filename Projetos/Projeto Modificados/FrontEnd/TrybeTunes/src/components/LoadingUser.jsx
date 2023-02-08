import React, { Component } from 'react';
import '../styles/LoadingUser.css';

export default class LoadingUser extends Component {
  render() {
    return (
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}
