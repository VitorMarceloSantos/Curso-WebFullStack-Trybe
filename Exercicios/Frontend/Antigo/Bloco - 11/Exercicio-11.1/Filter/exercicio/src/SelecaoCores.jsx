import React, { Component } from 'react';
import data from './data';
import './styleLista.css';

class SelecaoCores extends Component {
  // Para acessar o estado deve primeiro criar o cronstructor
  constructor (props) { // props são opcionais, receber propriedades
    super(props);

    // IMPORTANTE: Não tem a necessidade de fazer o bind, caso a função que está sendo utilizada faça uso de arrow function

    this.getValue = this.getValue.bind(this); // utilizado para que as funções(getValue) tenha acesso ao estado do componente (SelecaoCores)

    this.state = {
      filter: '', // valor inicial
      color: '', // valor inicial
    }
  }

  // A criação de funções deve ser efetuada antes do render();
  // utiliza o this. para chamar a função pois o o função render não consegue ver o que está de fora dele
  getValue(event){
    this.setState({
      filter: event.target.value,
      color: event.target.textContent
    });
  };

  selectElement(event){ // alterando a cor do elemento
    event.target.style.background = 'black'
    this.setState({ // alterando o estado do Color
      color: event.target.textContent
    });
  }

  /* NÃO FAZ USO DO BIND EM CASO DE ARROW FUNCTION
  getValue = (event) => {
    this.setState({
      filter: event.target.value
    });
  }
  */
 
  filterValue(){
    const filtered = data.filter(({color, value}) => (color).includes(this.state.filter))
    return filtered;
  }

  // TODA VEZ QUE O ESTADO DO ELEMENTO É ALTERADO, A FUNÇÃO RENDER É CHAMADA AUTOMATICAMENTE

  render() {
    return (
      <div>
        <input type="text" className='input-text' onChange={ (event) =>  this.getValue(event) }/> { /* Utiliza uma arrow function para passar o evento (o mesmo que o addEventListenner) */}
        <ul className='list-li'>
        { (this.filterValue()).map(({ color, value }) => ( // realizando a destruturação do objeto
          <li key={ value } className="li-map" style={{ background: value }} onClick={ (event) => this.selectElement(event) }>{ color }</li> // aplicando estilo inline
        )) }
        </ul>
      </div>
    );
  }
}

export default SelecaoCores;