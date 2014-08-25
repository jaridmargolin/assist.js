/*!
 * deepMerge.js
 * 
 * Copyright (c) 2014
 */

define([
  './isArray',
  './isObject'
], function (isArray, isObject) {


/* -----------------------------------------------------------------------------
 * deepMerge
 * ---------------------------------------------------------------------------*/

/**
 * Deep merge 2 objects.
 *
 * @example
 * var dest = deep(dest, objToMerge);
 *
 * @public
 *
 * @param {object} dest - Object to merge properties into.
 * @param {object} obj - Object to merge properties from.
 */
var deepMerge = function (dest, obj) {
  for (var k in obj) {
    var destVal = dest[k] || {};
    var objVal = obj[k];

    var isObj = isObject(objVal);
    var isArr = isArray(objVal);

    if (isObj || isArr) {
      if (isObj && !isObject(destVal)) {
        dest[k] = {};
      }

      if (isArr && !isArray(destVal)) {
        dest[k] = [];
      }

      dest[k] = deepMerge(destVal, objVal);
    } else {
      dest[k] = objVal;
    }
  }

  return dest;
};


/* -----------------------------------------------------------------------------
 * deepMerge
 * ---------------------------------------------------------------------------*/

return deepMerge;


});