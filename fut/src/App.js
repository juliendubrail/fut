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
  
  componentDidMount(){
    //fetch('http://localhost:8080')
    fetch('https://api.sheety.co/32cddc1c-d9cb-4439-b995-6c204bc0e5c0')
    .then(response => response.json())
    .then(data => console.log(data[0].name))
    .catch(error => console.log('error is', error));
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
    console.log(this.state.input);
  }

  render() {
    return (
      <div className="App">
      <header className="fut-header">
        <Topbar value={this.state.input} onInputChange={this.onInputChange} />
        </header>
      </div>
    );
  }
}

export default App;
