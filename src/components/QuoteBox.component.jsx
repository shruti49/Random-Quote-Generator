import React, { Component } from 'react';

import './QuoteBox.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

export default class QuoteBox extends Component {
  render() {
    const { quotes } = this.props;
    return (
      <div id='quote-box' className='quote-container'>
        <div className='quote-button'>
          <button
            id='new-quote'
            className='quote-button__link quote-button__link--1'
            onClick={this.props.fetchData}
          >
            <FontAwesomeIcon icon={faSyncAlt} /> New Quote
          </button>
          <a
            id='tweet-quote'
            className='quote-button__link quote-button__link--2'
            href={
              'https://twitter.com/intent/tweet?hashtags=quotes&text=' +
              quotes.quote
            }
          >
            <FontAwesomeIcon icon={faTwitter} /> Share
          </a>
        </div>
        <div className='quote'>
          <p id='text' className='quote__text'>
            <FontAwesomeIcon icon={faQuoteLeft} />
            <br /> {quotes.quote} <FontAwesomeIcon icon={faQuoteRight} />
          </p>
          <h2 id='author' className='quote__author'>
            --
            {quotes.character}
          </h2>
          <p className='quote__footer-text'>
            Made By Shruti
            <FontAwesomeIcon icon={faHeart} />
          </p>
        </div>
      </div>
    );
  }
}
