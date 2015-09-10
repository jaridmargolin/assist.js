/*!
 * capitalize.js
 */




/* -----------------------------------------------------------------------------
 * capitalize
 * ---------------------------------------------------------------------------*/

/**
 * Little helper to capitalize used for creating method names
 * from event data.
 *
 * @public
 *
 * @param {string} str - String to capitalize.
 */
module.exports = function (str) {
  return str[0].toUpperCase() + str.slice(1);
};


