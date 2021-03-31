import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function makeList() {
  var mytext = document.createElement("p");
  mytext.innerHTML = "I've been added to a list";
  document.body.appendChild(mytext);
}

const myelement = (
  <button onClick={makeList}>Add an item!</button>
)

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

ReactDOM.render(myelement, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
