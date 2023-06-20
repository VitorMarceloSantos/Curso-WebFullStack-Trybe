import React, { Component } from 'react'
import informationUser from './dataContext'

class FooterComponent extends Component {
  render() {
    const { name, age, profission } = this.context;
    return (
      <div>
        <h1>Footer</h1>
        <p>{`Nome: ${name}`}</p>
        <p>{`Idade: ${age}`}</p>
        <p>{`Profissão: ${profission}`}</p>
      </div>
    )
  }
}
FooterComponent.contextType = informationUser; // conexão componente com o context, só funciona para classes
export default FooterComponent