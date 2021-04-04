import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyForm extends React.Component{
  constructor() {
    super();
    this.state = {
      inputText: '', //Text inside the input box
      headerState: '', //Text of the header
    };
  }

  changeText = (event) => {
    this.setState({inputText: event.target.value}); //Grabs the text of the input box
  }


  buttonChangeText = (event) => {
    event.preventDefault(); //Stops page from refreshing after clicking the button
    this.setState({headerState: this.state.inputText}); //Sets the text of the header
  }
  
  render() {
    return(
      <form>
        <h1>{this.state.headerState}</h1>
        <p>Enter your text: </p>
        <input onChange={this.changeText}/>
        <button onClick={this.buttonChangeText}>Submit!</button>
      </form>
    );
  }
  
}


ReactDOM.render(<MyForm/>, document.getElementById('root'));