import React, { Component } from 'react';
import './App.css';
import './styles';
import API from './api';
import Topbar from './components/Topbar';
import MovieList from './components/MovieList';
import { padding } from './styles';

class App extends Component {

    state = {
      movies: [],
      action: [],
      searchInput : '',
    }
    componentDidMount() {
      // fetch("https://movied.herokuapp.com/discover")
      fetch(API.boxOffice)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({ movies: data }, console.log(this.state.movies));
        })
        .catch(error => console.log('error is', error));
        
        fetch(API.action)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({ action: data }, console.log(this.state.action));
        })
        .catch(error => console.log('error is', error))
    }

  onInputChange = (event) =>{
    this.setState({searchInput: event.target.value}, () => console.log(this.state.searchInput));
  }


  render() {
    const  { movies, action } = this.state;
    return (
      <div className="App">
      <header className="fut-header">
        <Topbar value={this.state.searchInput} onInputChange={this.onInputChange} style={padding.LARGE}/>
        <MovieList category={`DISCOVER`} movies={movies} />
        <MovieList category={`ACTION`} movies={action} />
        </header>
      </div>
    );
  }
}

export default App;
