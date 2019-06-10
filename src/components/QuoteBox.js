import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

export default class QuoteBox extends Component {
  render() {
    const { quotes } = this.props;
    return (
      <div id="quote-box" className="quote-container">
        <div className="quote-buttons">
          <button
            id="new-quote"
            className="quote-btn"
            onClick={this.props.fetchData}
          >
            <FontAwesomeIcon icon={faSyncAlt} />{" "}
            New Quote 
          </button>
          <a
            href={
              "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
              quotes.quote
            }
            id="tweet-quote"
          >
            <button className="tweet-btn">
              <FontAwesomeIcon icon={faTwitter} />{" "}
              Share
            </button>
          </a>
        </div>
        <Animated animationIn="tada" isVisible={true}>
          <div className="quotation">
            <p id="text" className="quote-text">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <br /> {quotes.quote} <FontAwesomeIcon icon={faQuoteRight} />
            </p>
            <h2 id="author" className="quote-author">--
              {quotes.character}
            </h2>
            <p className="footer-text">
              Made By Shruti<FontAwesomeIcon icon={faHeart} /> 
            </p>
          </div>
        </Animated>
      </div>
    );
  }
}
