/*!
 * isFunction.js
 * 
 * Copyright (c) 2014
 */




/* -----------------------------------------------------------------------------
 * isFunction
 * ---------------------------------------------------------------------------*/

/**
 * Determine if a given value is a Function.
 *
 * @example
 * var isFn = isFunction(fn);
 *
 * @public
 *
 * @param {*} value - Value to test.
 */
module.exports = function (value) {
  return Object.prototype.toString.call(value) === '[object Function]';
};


