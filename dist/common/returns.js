/*!
 * returns.js
 * 
 * Copyright (c) 2014
 */




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
module.exports = function (value) {
  return function () { return value; };
};


