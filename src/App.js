import React, { Component } from "react";
import Header from "./components/Header";
import QuoteBox from "./components/QuoteBox";

export default class App extends Component {
  state = {
    quotes: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("https://got-quotes.herokuapp.com/quotes")
      .then(response => response.json())
      .then(quote => this.setState({ quotes: quote }));
  };

  render() {
    return (
      <div className="app">
        <Header />
        <QuoteBox quotes={this.state.quotes} fetchData={this.fetchData} />
      </div>
    );
  }
}
