import React, { Component } from 'react';
import './App.css';
import Topbar from './components/Topbar';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    input : '',
  }
  this.onInputChange = this.onInputChange.bind(this);
}

onInputChange = (event) =>{
  this.setState({input: event.target.value});
  console.log(this.state.input);
}

  render() {
    return (
      <div className="App">
      <header className="fut-header">
        <Topbar value={this.state.input} onInputChange={this.onInputChange}  />
        </header>
      </div>
    );
  }
}

export default App;
