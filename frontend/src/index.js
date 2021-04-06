import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor() {
    super();
    //Initialize the date to show the current date and time
    this.state = {date: new Date()};
  }

  //Update the state to the current date and time
  tick() {
    this.setState({date: new Date()});
  }

  //After rendering, set a timer to call the call the tick() function every second
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  render() {
    //Show only the current time
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}


ReactDOM.render(<Clock />, document.getElementById('root'));

