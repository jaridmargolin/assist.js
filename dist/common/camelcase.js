/*!
 * camelcase.js
 */




/* -----------------------------------------------------------------------------
 * camelcase
 * ---------------------------------------------------------------------------*/

var capitalize = require('./capitalize');


/* -----------------------------------------------------------------------------
 * camelcase
 * ---------------------------------------------------------------------------*/

/**
 * Little helper to return camelcase version of string.
 *
 * @public
 *
 * @param {string} str - String to camelcase.
 */
module.exports = function (str) {
  var output = '';
  var parts = str.split(/[_||-]/);

  for (var i = 0, l = parts.length; i < l; i++) {
    output += capitalize(parts[i]);
  }

  return output;
};


