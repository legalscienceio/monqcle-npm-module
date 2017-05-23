MonQcle API for Nodejs
=========

MonQcle NPM module for usage of MonQcle API with Nodejs

## Installation
~~~~
  npm install https://github.com/legalscienceio/monqcle-npm-module.git --save
~~~~
## Usage
~~~~
  var monqcle_api = require('monqcle-api')
      dataset = monqcle_api.dataset,
      query = monqcle_api.query;

  var ds = dataset("biosimilars-laws","");
      ds.then(function(){ done() });

~~~~
## Tests
~~~~
  npm test
~~~~
## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 1.0.0 Initial release
