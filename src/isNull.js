/*!
 * isNull.js
 * 
 * Copyright (c) 2014
 */

define(function () {


/* -----------------------------------------------------------------------------
 * isNull
 * ---------------------------------------------------------------------------*/

/**
 * Determine if a given value is null.
 *
 * @example
 * var isValue = !isNull(value);
 *
 * @public
 *
 * @param {*} value - Value to test.
 * @returns {boolean} - result of null check.
 */
return function (variable) {
  return variable === null;
};


});