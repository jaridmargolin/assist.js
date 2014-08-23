/*!
 * evaluate.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
], function (_) {


/* -----------------------------------------------------------------------------
 * evaluate
 * ---------------------------------------------------------------------------*/

/**
 * Loop over all object keys. If value is a function
 * execute it and set the return value as the value
 * for that key.
 *
 * @example
 * var test = { key: function () { return 'str'; } }
 * evaluate(test);
 * // test = { key: 'str' }
 *
 * @public
 *
 * @param {object} obj - Object to evaluate.
 * @param {object} obj - Context to call fn on (obj by default.
 *
 * @returns Evaluated object.
 */
return function (obj, context) {
  for (var k in obj) {
    if (_.isFunction(obj[k])) {
      obj[k] = obj[k].call(context || obj);
    }
  }

  return obj;
};


});