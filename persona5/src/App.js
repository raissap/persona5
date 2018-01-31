import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { negotiationGuide } from './data/negotiation_guide';
import { NegotiationTableWrapper } from './components/negotiation_table';
import { Table } from './components/table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Table src={negotiationGuide} />
        <NegotiationTableWrapper />
      </div>
    );
  }
}

export default App;
