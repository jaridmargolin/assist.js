/*!
 * snip.js
 */

define(function () {


/* -----------------------------------------------------------------------------
 * snip
 * ---------------------------------------------------------------------------*/

/**
 * Return deleted property from an object.
 *
 * @example
 * var test = { prop: 'val' }
 * var deleted = snip(test);
 * // deleted = 'val'
 * // test = {}
 *
 * @public
 *
 * @param {object} obj - Object to delete property from.
 * @param {string} prop - Name of property to delete.
 *
 * @returns Value of deleted property. 
 */
return function (obj, prop) {
  var val = obj[prop];
  delete obj[prop];

  return val;
};


});