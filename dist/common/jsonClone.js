/*!
 * jsonClone.js
 * 
 * Copyright (c) 2014
 */




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
module.exports = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};


