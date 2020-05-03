# Unshortify


NodeJs promisify module that resolve shorten urls

## Installation

  `npm i unshortify`

## Usage

    const unshort = require('unshortify');

    const resolvedUrl = await unshort('https://bit.ly/2VVTXki');
  
  
  Output should be `https://sok.sx/`


## Dependencies

This module uses the next dependencies:
- node-fetch (For HTTP request)
- fetch-cookie (Bypass some "browser checkers" that handles cookies)
- random-useragent (For generate valid user agents to make valid HTTP request)