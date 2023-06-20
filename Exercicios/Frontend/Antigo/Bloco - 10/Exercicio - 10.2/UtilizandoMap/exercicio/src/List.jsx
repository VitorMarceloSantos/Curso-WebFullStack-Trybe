import React, { Component } from 'react';

class List extends Component {
  render () {
    const { name, email, avatar } = this.props.usuario;
    return (
      <div>
        <h1>{ name }</h1>
        <img src={ avatar } alt={ name } />
        <p>{ email }</p>
      </div>
    );
  }
}

export default List;