/*!
 * isObject.js
 * 
 * Copyright (c) 2014
 */

define(function () {


/* -----------------------------------------------------------------------------
 * isObject
 * ---------------------------------------------------------------------------*/

/**
 * Determine if a given value is an Object.
 *
 * @example
 * var isObj = isObject(obj);
 *
 * @public
 *
 * @param {*} value - Value to test.
 */
return function (value) {
  return value === Object(value);
};


});