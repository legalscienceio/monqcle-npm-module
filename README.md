MonQcle API for Nodejs
=========

MonQcle NPM module for usage of MonQcle API with Nodejs

## Installation

  npm install monqcle-api --save

## Usage

  var monqcle_api = require('monqcle-api')
      escape = monqcle_api.escape,
      unescape = monqcle_api.unescape;

  var html = '<h1>Hello World</h1>',
      escaped = escape(html),
      unescaped = unescape(escaped);

  console.log('html', html, 'escaped', escaped, 'unescaped', unescaped);

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 1.0.0 Initial release