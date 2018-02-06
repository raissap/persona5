import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Nav, NavItem } from 'react-bootstrap';
import { NegotiationTableWrapper } from './components/negotiation_table';

class BlankPage extends Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

const PAGES = {
  hello: {
    text: 'Hello',
    page: <BlankPage />
  },
  negotiation: {
    text: 'Negotiation Guide',
    page: <NegotiationTableWrapper />
  }
};

class NavBar extends Component {
  render() {
    return (
      <Nav bsStyle="tabs" activeKey={this.props.activePage} onSelect={this.props.onSelect}>
        {Object.keys(PAGES).map((page, index) => (
          <NavItem key={index} eventKey={page}>{PAGES[page].text}</NavItem>
        ))}
      </Nav>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'hello'
    }

    this.setPage = this.setPage.bind(this);
  }

  setPage(page) {
    this.setState({
      page: page
    });
  }

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

        <NavBar activePage={this.state.page} onSelect={this.setPage} />
        {PAGES[this.state.page].page}
      </div>
    );
  }
}

export default App;
