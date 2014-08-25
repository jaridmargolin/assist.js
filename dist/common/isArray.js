/*!
 * isArray.js
 * 
 * Copyright (c) 2014
 */




/* -----------------------------------------------------------------------------
 * isArray
 * ---------------------------------------------------------------------------*/

/**
 * Determine if a given value is an Array.
 *
 * @example
 * var isArr = isArray(array);
 *
 * @public
 *
 * @param {*} value - Value to test.
 */
module.exports = function (value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};


