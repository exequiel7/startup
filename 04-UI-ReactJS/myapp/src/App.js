import React, { Component } from 'react';
import './App.css';
import CreateMovie from './Components/createMovie';
import MovieList from './Components/movieList';

class App extends Component {
  constructor(){
    super();
    this.addMovie = this.addMovie.bind(this);
    this.checkIfExist = this.checkIfExist.bind(this);
    this.state = { 
      movies: [
        {title:"Jurassic World",year:"2015", duration:"124"}
      ],
      isOpen: false
    };
  }

  checkIfExist(movie){
    let bool = false;
    for(let mov of this.state.movies){
      if(mov.title === movie.title){
        bool = true;
      }
    }
    return bool;
  }

  addMovie(newMovie){
    let flag = this.checkIfExist(newMovie);
    if(flag !== true){
      this.setState({
        movies : [...this.state.movies, newMovie]
      });
    } else {
      alert('The movie already exists!');
    } 
  }

  render() {
    return (
      <div className="App">
        <CreateMovie addMovie ={this.addMovie}/>
        <MovieList movies = {this.state.movies} />
      </div>
    );
  }
}

export default App;
