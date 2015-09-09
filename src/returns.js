/*!
 * returns.js
 */

define(function () {


/* -----------------------------------------------------------------------------
 * returns
 * ---------------------------------------------------------------------------*/

/**
 * Helper method that creates a function which returns
 * a passed value.
 *
 * @public
 *
 * @param {*} value - Value to return.
 */
return function (value) {
  return function () { return value; };
};


});