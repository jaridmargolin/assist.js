/*!
 * jsonClone.js
 */

define(function () {


/* -----------------------------------------------------------------------------
 * jsonClone
 * ---------------------------------------------------------------------------*/

/**
 * Clone object containing variables only. Will not work with
 * functions or undefined values.
 *
 * @example
 * cloned = clone(obj);
 *
 * @public
 *
 * @param {object} obj - Object to clone.
 */
return function (obj) {
  return JSON.parse(JSON.stringify(obj));
};


});