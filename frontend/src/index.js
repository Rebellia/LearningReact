import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    //Initialize a state with an empty array
    this.state = {
     /*  title: '',
      genre: '',
      date: '', */
      movies: [{
        title: '',
        genre: '',
        date: ''
      }],
      titleText: '',
      genreText: '',
      dateText: '',
    };
  }
  
  //Change and set the title
  changeTitle = (event) => {
    this.setState({titleText: event.target.value}); //Grabs the text of the input box
  }

  setTitle = (event) => {
    event.preventDefault(); //Stops page from refreshing after clicking the button
    this.setState({title: this.state.titleText}); //Grabs the text of the input box
  }

  //Change and set the genre
  changeGenre = (event) => {
    this.setState({genreText: event.target.value}); //Grabs the text of the input box
  }

  setGenre = (event) => {
    event.preventDefault(); //Stops page from refreshing after clicking the button
    this.setState({genre: this.state.genreText}); //Grabs the text of the input box
  }

  //Change and set the date
  changeDate = (event) => {
    this.setState({dateText: event.target.value}); //Grabs the text of the input box
  }

  setDate = (event) => {
    event.preventDefault(); //Stops page from refreshing after clicking the button
    this.setState({date: this.state.dateText}); //Grabs the text of the input box
  }


  addMovieToList = (event) => {
    event.preventDefault();
    var newMovie = [{
      title: this.state.titleText,
      genre: this.state.genreText,
      date: this.state.genreText
    }];

    var movieList = this.state.movies;
    movieList.push(newMovie);
    this.setState({movies: movieList});

    console.log(this.state.movies);
  }

  
  renderMovies = () => {
    <p>My new movie</p>
  }

  render() {
    return(
      <form>
        <p>What is the title?</p>
        <input onChange={this.changeTitle}/>
        <br/>
        <p>What is the genre?</p>
        <input onChange={this.changeGenre}/>
        <br/>
        <p>What is the date?</p>
        <input onChange={this.changeDate}/>
        <br/>
        <br/>
        <button onClick={this.addMovieToList}>Add Movie</button>
        {this.renderMovies()}
      </form>
    );
  }
}


ReactDOM.render(<ItemList/>, document.getElementById('root'));