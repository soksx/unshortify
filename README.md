# unshortify
NodeJs module that resolve shorten urls
=========

A small library that adds commas to numbers

## Installation

  `npm install @sokk/unshortify`

## Usage

    const unshort = require('@sokk/unshortify');

    const resolvedUrl = unshort('https://bit.ly/2VVTXki');
  
  
  Output should be `https://sok.sx/`


## Dependencies

This module uses the next dependencies:
- node-fetch (For HTTP request)
- fetch-cookie (Bypass some "browser checkers" that handles cookies)
- random-useragent (For generate valid user agents to make valid HTTP request)