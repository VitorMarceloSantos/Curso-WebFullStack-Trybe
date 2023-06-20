import React, { Component } from 'react'
import Email from './Email';
import Password from './Password';
// import Submit from './Submit';

// O ESTADO SEMPRE TEM QUE ESTÁ NO COMPONENTE MAIS ALTO, ONDE SERÁ CHAMANDO OS OUTROS COMPONENTES
class Form extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      isDisable: true, 
      arrayEmails: [] // guardar todos os emails
    }
  }

  //IMPORTANTE: POSSUI DUAS FORMAS DE SETSTATE: 1° NA QUAL É PASSADO UM OBJETO COMO PARÂMETRO E ESSE OBJETO É MODIFICADO. 2° É PASSADO UMA FUNÇÁO COMO PARÂMETRO EM QUE O PARAMETRO É ESTADO ANTERIOR.
  
  handlerGeneric = (event) => {  // destruturacao do event.target
    const { name, value } = event.target;
    // função setState é ASSINCRONO
    // 2 parâmetros do setState, primeiro a modificação, e o segundo uma função callback que vai utilizar a modificação realizada no primeiro parâmetro
    this.setState({ [name]: value }, () => {
      // deve usar o colchetes para indicar que é uma variável
      const { email, password } = this.state;

      // Operação ternária(se for verdadeiro vai receber true, caso seja falso vai receber false)
      const buttonIsDisabled = email.length === 0 || password.length === 0 ? true : false;

      this.setState({ // atribuindo o valor da variável buttonIsDisable no setState
        isDisable: buttonIsDisabled
      })
    });
  }

  handleSubmit = (event) => {
    event.preventDefault(); // não recarregar a página ao enviar o formulário (ao recarregar a página o state é zerado ou seja, volta ao seu estado inicial)
    const { email } = this.state; // destructuring
    alert(`Bem vindo ${email}`);
    this.setState((prevState) => { // prevState vai pegar o estado anterior
      return{
        // cria um novo array, sendo que copia o estado anterior e adiciona novo elemento
        arrayEmails: [...prevState.arrayEmails, email], //utiliza o spread(...+estado anterior)para copiar o array
        email: '', // apagando dados digitados
        password: '' // apagando dados digitados
      }
    });
  }

  /*IMPORTANTE:  O COMPONENTE PAI ALTERA O COMPONENTE FILHO VIA PROPS..... JÁ O COMPONENTE FILHO ALTERA O COMPONENTE PAI VIA CALLBACK(ENVIADA UMA FUNÇÃO JUNTAMENTE COM OS ELEMENTOS PARA QUE SEJA ALTERADO)*/
  render() {
    const { email, password, isDisable } = this.state; // utilizando os estados no formulário
    return (
      <form onSubmit={this.handleSubmit}> {/* Evento para enviar o formulario - utiliza o onSubmit no form e não no button para que ao se teclar o enter o formulário seja enviado*/}

        <Email
          email={email} // enviado como parâmetro
          handlerGeneric={this.handlerGeneric} // enviado como parâmetro
        />
        {/* <label htmlFor="email">
          Email
          <input type="text" name="email" id="email" value={email} onChange={(event) => this.handlerGeneric(event)} /> 
        </label> */}

        <Password
          password={password} // enviado como parâmetro
          handlerGeneric={this.handlerGeneric} // enviado como parâmetro
        />

        {/* <label htmlFor="password">
          Password
          <input type="password" name="password" id="password" value={ password } onChange={ this.handlerGeneric } />
        </label> */}
        <button type="submit" disabled={isDisable} name='submit' value={isDisable}>Enviar</button>
        {/* <Email info={ email }/> */}
        {/* <Password />
        <Submit /> */}
      </form>
    )
  }
}

export default Form;