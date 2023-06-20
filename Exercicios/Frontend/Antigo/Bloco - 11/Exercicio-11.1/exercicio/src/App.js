import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.clique = this.clique.bind(this); // para que o estado fique visevel para toda a class App.
  }

  clique() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
     //numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return <button onClick={ this.clique }>{ this.state.numeroDeCliques }</button>
        // <button onclick={ console.log('Botão - 2')}>Botão - 2</button>
        // <button onclick={ console.log('Botão - 3')}>Botão - 3</button>
    
  }
}

export default App;
