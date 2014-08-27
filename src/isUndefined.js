/*!
 * isUndefined.js
 * 
 * Copyright (c) 2014
 */

define(function () {


/* -----------------------------------------------------------------------------
 * isUndefined
 * ---------------------------------------------------------------------------*/

/**
 * Determine if a given value is undefined.
 *
 * @example
 * var isUndf = isUndefined(value);
 *
 * @public
 *
 * @param {*} value - Value to test.
 * @returns {boolean} - result of null check.
 */
return function (variable) {
  return typeof variable === 'undefined';
};


});