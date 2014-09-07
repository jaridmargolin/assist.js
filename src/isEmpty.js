/*!
 * isEmpty.js
 * 
 * Copyright (c) 2014
 */

define([
  './isArray'
], function (isArray) {


/* -----------------------------------------------------------------------------
 * isEmpty
 * ---------------------------------------------------------------------------*/

/**
 * Determine if an object or array is empty.
 *
 * @example
 * var empty = isEmpty({});
 * // true
 *
 * @public
 *
 * @param {object} obj - obj to run isEmpty test on
 * @reutns {boolean} - true if object is empty. false if not.
 */
return function (obj) {
  // Array
  if (isArray(obj)) {
    return (obj.length === 0);
  }

  // Object
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) { return false; }
  }

  return true;
};


});