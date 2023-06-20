import React, { Component } from 'react';

class Email extends Component {
  render(){
    const { email, handlerGeneric } = this.props; // recebendo os parãmetros via props
    return (
      <div>
        <label htmlFor="email">
          Email
          <input type="text" name="email" id="email" value={ email } onChange={(event) => handlerGeneric(event)} /> {/* Passando o evento como parâmetro - 1° Formula */}
        </label>
      </div>
    );
  }
}

export default Email;