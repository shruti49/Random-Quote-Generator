import React, { Component } from 'react';

import './App.css';

import Header from './components/Header/Header.component';
import QuoteBox from './components/QuoteBox.component';

export default class App extends Component {
  state = {
    quotes: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://got-quotes.herokuapp.com/quotes')
      .then(response => response.json())
      .then(quote => this.setState({ quotes: quote }));
  };

  render() {
    const { quotes } = this.state;
    return (
      <div className='app'>
        <Header />
        <QuoteBox quotes={quotes} fetchData={this.fetchData} />
      </div>
    );
  }
}
