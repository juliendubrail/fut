import React, { Component } from 'react';
import './App.css';
import './styles';
import API from './api';
import Topbar from './components/Topbar';
import { padding } from './styles';

class App extends Component {

    state = {
      searchInput : '',
    }
  
  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(data => console.log(data[0].name))
    .catch(error => console.log('error is', error));
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value}, () => console.log(this.state.input));
  }

  render() {
    return (
      <div className="App">
      <header className="fut-header">
        <Topbar value={this.state.input} onInputChange={this.onInputChange} style={padding.LARGE}/>
        </header>
      </div>
    );
  }
}

export default App;
