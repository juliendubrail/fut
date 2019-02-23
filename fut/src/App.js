import React, { Component } from 'react';
import './App.css';
import Topbar from './components/Topbar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="fut-header">
        <Topbar />
        </header>
      </div>
    );
  }
}

export default App;
