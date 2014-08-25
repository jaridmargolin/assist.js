/*!
 * isArray.js
 * 
 * Copyright (c) 2014
 */

define(function () {


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
return function (value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};


});