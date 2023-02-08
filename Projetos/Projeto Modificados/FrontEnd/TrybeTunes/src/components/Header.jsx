import React, { Component } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BiCaretDown } from 'react-icons/bi';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { getUser } from '../services/userAPI';
import LoadingUser from './LoadingUser';
import '../styles/index.css';
import '../styles/header.css';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      nameUser: {},
      isLoading: false,
    };
  }

  componentDidMount() { // após renderizar deverá chamar a função com o promise da função getUser
    this.setState({ isLoading: true }, async () => { // utiliza o async pois é uma função assincrona
      this.setState({ nameUser: await getUser() }, () => { // retorna um objeto
        this.setState({ isLoading: false });
      }); // espera a conclusão de getUser(Promise), para executar as demais
    });
  }

  render() {
    const { nameUser, isLoading } = this.state;
    return (
      <header className="container-header">
        <section className="container-arrows">
          <div className="arrows-left">
            <MdArrowBackIosNew className="arrows" />
          </div>
          <div className="arrows-rigth">
            <MdArrowForwardIos className="arrows" />
          </div>
        </section>
        {isLoading ? <LoadingUser /> : (
          <section className="container-user">
            <div className="container-border">
              <AiOutlineUser className="icon-user-header" />
              {/* <p>{console.log(nameUser)}</p> */}
              <h2>{nameUser.name}</h2>
              <BiCaretDown style={ { color: 'white' } } />
            </div>
          </section>
        )}
      </header>
    );
  }
}
