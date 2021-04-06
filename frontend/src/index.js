import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ItemList extends React.Component {
  constructor() {
    super();
    //Initialize a state with an empty array
    this.state = {
      items: [], //array of text
      inputText: '', //text from the input box
    };
  }

  changeText = (event) => {
    this.setState({inputText: event.target.value}); //Grabs the text of the input box
  }

  addThingToList = (event) => {
    event.preventDefault(); //Stops page from refreshing after clicking the button
    var strList = this.state.items; //grabs the array
    strList.push(this.state.inputText); //adds string to the array
    this.setState({items: strList}); //set the state of the array to the current array
  }

  renderItems = () => (
    this.state.items.map(itm => <p>{itm}</p>)
  );
  
  render() {
    return(
      <form>
        <p>Enter your text:</p>
        <input onChange={this.changeText}/>
        <button onClick={this.addThingToList}>Add Item</button>
        {this.renderItems()}
      </form>
    );
  }
}


ReactDOM.render(<ItemList/>, document.getElementById('root'));