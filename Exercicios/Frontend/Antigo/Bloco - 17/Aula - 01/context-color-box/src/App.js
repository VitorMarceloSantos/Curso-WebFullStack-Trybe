import './App.css';
import React from 'react';
import { createContext } from 'react'; // Importação da função
import ColorBox from './components/ColorBox';

export const colorContext = createContext(); // criando o createContext

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      colors: ['blue', 'red', 'green'],
    }
  }
 
  render() {
    const {colors} = this.state; // destruturação
    const valueContext = { // passando o valueContext para os componentes filhos
      colors: colors,
    }
    return (
      <colorContext.Provider value={valueContext}>
        <ColorBox />
      </colorContext.Provider>
    );
  }
}

export default App;
