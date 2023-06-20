import React, { Component } from 'react'
import informationUser from './dataContext'
import PropTypes from 'prop-types';

class DataContexProvider extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Vitor Marcelo',
      age: '31',
      profission: 'programmer',
    }
  }

  handlePrintHello = () => {
    console.log('Hello World.');
  }

  render() {
    const { children } = this.props; // children é uma forma de passsar todas as props do componente
    // const { name, age, profission } = this.state;
    const valueContext = {
      ...this.state,
      handlePrintHello: this.handlePrintHello, // passando a função
      // name:name, 
      // age: age,
      // profission: profission
    }; // passando os estado destruturado
    return (
      <informationUser.Provider value={ valueContext }>
        {children}
        {/* Tudo o que for escrito aqui, será passado como children */}
      </informationUser.Provider>
    )
  }
}

DataContexProvider.propTypes = {
  children: PropTypes.node.isRequired, // o node significa um nó do DOM React
}

export default DataContexProvider