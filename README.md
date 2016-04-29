# Goal #
  Create a small project that can be easily added to any UI.

# Requirment #
  Works with IE9, 10, 11, Chrome, Firefox, and Safari

# Tools #

*npm
*Created using windows

Modules

## Required Modules ##
  * axios
  * browserify
  * preact
  * babelify
  * babel-preset-es2015
  * babel-preset-react
  * object-assign
  * flux

## Development - Optional ##
  * watchify
  * http-server
  * cuncurently

# Build project #
  1. npm install

  2. Add your url in util/UserAPI

  3. npm run build
    * browserify index.js -o bundle.js -t [ babelify ]

## Development - Optional ##

  1. npm run watch (Re-builds project when files change)
    * watchify index.js -o bundle.js -t [ babelify ]

  2. npm run start-server
    *http-server has to be installed globally

  3. npm run watch-server
    *runs both watch and http-server