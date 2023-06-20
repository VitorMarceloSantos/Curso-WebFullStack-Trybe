// O Hooks é um compenente funcional, ou seja, é utilizado quando se utilizado apenas funções para a criação e não classes.
// todo Hook começa com a palavra use e ele é uma função.

import { useState } from "react";

//Pode passar como parâmetro para o useState um objeto
const INITIAL_STATE = {
  name: '',
  age: '',
  profission: ''
}

function Contador() {
  // o hook SEMPRE  deve ser declarado no inicio.
  const [count, setCount] = useState(10) // retorna um array, esse array possui duas posições -> 1° o state, 2° função que vai alterar o valor do state(setNOmeDaState)
  const [name, setName] = useState('Vitor')
  // [] destruturação de array
  // no parentese do useState(X) irá passar o valor desejado

  //Passando um objeto como parâmetro
  const [form, setForm] = useState(INITIAL_STATE);


  // Criando um funçao para alterar o estado
  const handleCountMinus = () => {
    setCount((prevCount) => prevCount - 1); // o parâmetro que é passado precisa ser do mesmo tipo que o declarado no useState
  }
  const handleCountPlus = () => {
    setCount((prevCount) => prevCount + 1); // o parâmetro que é passado precisa ser do mesmo tipo que o declarado no useState
  }
  const handleName = () => {
    setName('Rafaela');
  }

  //HandleGenericoForm
  const handleForm = (event) => {
    setForm((prevState) => ({
      ...prevState, // fazerndo a cópia do state, pois caso não seja feito o mesmo será substituido
      [event.target.name]: event.target.value,
    }))
  }
  
  return (
    <div>
      <h1>{`Contador: ${count}`}</h1>
      <h2>{`Nome: ${name}`}</h2>
      <button onClick={ handleCountMinus }>Diminuir</button> {/*Chamando a função*/}
      <button onClick={ handleCountPlus }>Aumentar</button>
      <button onClick={() => handleName()}>Alterar Nome</button>
      <h2>Formulário</h2>
      <label>
        Nome:
        <input type="text" name="name" value={form.name} onChange={handleForm}/>
      </label>
      <label>
        Idade:
        <input type="number" name="age" value={form.age} onChange={handleForm}/>
      </label>
      <label>
        Profissão:
        <input type="text" name="profission" value={form.profission} onChange={handleForm}/>
      </label>
    </div>
  );
}

export default Contador;