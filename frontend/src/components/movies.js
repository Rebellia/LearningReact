import React, { Component } from "react";
import axios from "axios";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      buttonClicked: false
    }
    this.getDetails = this.getDetails.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:5000/getMovies").then(response => {
      this.setState({data: response.data});
    });
  }
  

  getDetails() {
    if (!this.state.buttonClicked) {
      console.log("He touched the button");
      this.setState({buttonClicked: true});
    }
  }
  
  render() {
    return (
      <div className="container-fluid" style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-xs-12" style={{ textAlign: "center" }}>
            <button className="btn btn-primary" style={{ position: "absolute", marginLeft: "50%" }}>Click</button>
            <div className="container-fluid" style={{position: "absolute", textAlign: "center", marginTop: "50px"}}>
            {this.state.buttonClicked ? this.state.data.map(data => {
                    return (
                      <React.Fragment>
                        <p><b>Title</b> : {data.title}</p>
                        <p><b>Genre</b> : {data.genre}</p>
                        <hr />
                      </React.Fragment>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* 

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    //Initialize a state with an empty array
    this.state = {
      movies: [{
        key: '',
        title: '',
        genre: '',
        date: ''
      }],
      titleText: '',
      genreText: '',
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


  addMovieToList = (event) => {
    event.preventDefault();
    var newMovie = {
      key: Math.random(),
      title: this.state.titleText,
      genre: this.state.genreText,
      date: new Date()
    };

    var movieList = this.state.movies;
    movieList.push(newMovie);
    this.setState({movies: movieList});
  }
  
  renderMovies = () => {
    const myMovies = this.state.movies;

    {myMovies.map((movie, key) => (
      <li key={key}>
        <p>{movie.title}</p>
      </li>
    ))}
  }
    

  render() {
    console.log(this.state.movies);
    return(
      <>
        <form>
          <p>What is the title?</p>
          <input onChange={this.changeTitle}/>
          <br/>
          <p>What is the genre?</p>
          <input onChange={this.changeGenre}/>
          <br/>
          <br/>
          <button onClick={this.addMovieToList}>Add Movie</button>
        </form>

        <div>
          {this.state.movies.map(movie => (
            <div key={movie.key}>
              <h1>Title: {movie.title}</h1>
              <p>Genre: {movie.genre}</p>
              <p>Date: {movie.date.toLocaleLowerCase}</p>
            </div>
          ))}
        </div>
      </>
      
    );
  }
} */