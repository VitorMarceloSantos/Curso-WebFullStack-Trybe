import React from 'react';
import '../styles/box.css';
import {colorContext} from '../App';

class ColorBox extends React.Component {
  state = {
    counter: 0,
  }
  handleClickColor = (colors) => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }), () => {
      const { counter } = this.state;
      if(counter > 2){
        this.setState({ counter: 0})
      }
    });
  }
  render() {
    const { counter } = this.state;
    return(
      <colorContext.Consumer>
        {({ colors }) => (
          <button
          type="button"
          className="box"
          style={ { backgroundColor: colors[counter] } }
          onClick={ (event) => this.handleClickColor(colors, event)}
          >
          Click me to change my color!
        </button>
        )} 
      </colorContext.Consumer>
    );
  }
}

export default ColorBox;
