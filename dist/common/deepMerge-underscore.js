/*!
 * deepMerge-underscore.js
 * 
 * Copyright (c) 2014
 */

var _ = require('underscore');


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

    var isObj = _.isObject(objVal);
    var isArr = _.isArray(objVal);

    if (isObj || isArr) {
      if (isObj && !_.isObject(destVal)) {
        dest[k] = {};
      }

      if (isArr && !_.isArray(destVal)) {
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

module.exports = deepMerge;


