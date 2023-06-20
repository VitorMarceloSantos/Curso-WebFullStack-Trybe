import React, { Component } from 'react'; // destruturing 

class About extends Component {
  render () {

    const skills = ['HTML', 'CSS', 'JS', 'Jest', 'BootStrap'];
    // const arrayMap = skills.map((skill) => <li> { skill } </li>);
    return (
      <div>
        <h1> Quem sou eu? </h1>
        <p> Me chamo Vitor Marcelo, sou estudando Web FullStack na Trybe.</p>
        <ul>
          {/* Comentário - pode utilizar a const arrayMap*/}
          <h2> Minhas Habilidades:</h2>
          { skills.map((skill) => <li> {skill} </li>  )}
        </ul>
      </div>
    );
  }
}

export default About;