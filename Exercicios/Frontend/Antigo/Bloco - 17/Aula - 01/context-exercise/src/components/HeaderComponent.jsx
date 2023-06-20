import React, { Component } from 'react'
import informationUser from './dataContext';

class HeaderComponent extends Component {
  render() {
    return (
      // Consumer : funciona para classes e funçoes
      <informationUser.Consumer> 
        {
          ({name, age, profission, handlePrintHello }) => (
          <div>
            <h1>Header</h1>
            <p>{`Nome: ${name}`}</p>
            <p>{`Idade: ${age}`}</p>
            <p>{`Profissão: ${profission}`}</p>
            {handlePrintHello()}
          </div>
          )
        }
      </informationUser.Consumer>
    )
  }
}


export default HeaderComponent;