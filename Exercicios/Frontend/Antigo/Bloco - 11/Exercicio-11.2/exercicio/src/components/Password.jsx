import React, { Component } from 'react';

class Password extends Component {
  render(){
    const { password, handlerGeneric }= this.props; // recebendo os parãmetros via props
    return(
      <label htmlFor="password">
          Password
          <input type="password" name="password" id="password" value={ password } onChange={ handlerGeneric } />  {/* Passando o evento como parâmetro - 2° Formula */}
        </label>
    );
  }
}

export default Password;