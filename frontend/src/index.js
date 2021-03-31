import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
function makeList() {
  var myText = <p>"I've been added to a list"</p>
  document.body.appendChild(myText);
}

const myelement = (
  <button onClick={makeList}>
    Add an item!
  </button>
)
*/

class ItemList extends React.Component {
  state = {
    items:[]
  }

  addThingToList = () => {
    const strList = this.state.items;
    strList.push(`I've been added to a list ${Math.random()}`);
    this.setState({items: strList});
    console.log('addThingToList', this.state.items);
  }

  renderItems = () => (
    this.state.items.map(itm =>
      <Item text={itm} /> 
    )
  );

  render = () => (
    <div>
      <button onClick={this.addThingToList}>Add Thing To List</button>
      {/*this.state.items.map(itm => <p key={itm}>{itm}</p>)*/}
      {this.renderItems()}
    </div>
  )
  
}

class Item extends React.Component {
  state = {
    color: 'green'
  }

  changeColor = () => {
    console.log('changeColor')
    if (this.state.color === 'green') {
      this.setState({color: 'blue'});
    } else {
      this.setState({color: 'green'})
    }
  }

  render = () => (
    <div style={{background: this.state.color}} onClick={this.changeColor}>
      {this.props.text}
    </div>
  )
}

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

ReactDOM.render(
  <React.StrictMode>
    <ItemList />
  </React.StrictMode>,
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
