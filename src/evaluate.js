/*!
 * evaluate.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
], function (_) {


// ----------------------------------------------------------------------------
// evaluate
// ----------------------------------------------------------------------------

/**
 * Loop over all object keys. If value is a function
 * execute it and set the return value as the value
 * for that key.
 *
 * @example
 * var test = { key: function () { return 'str'; } }
 * _.evaluate(test);
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
  _.each(obj, function (val, key) {
    if (_.isFunction(obj[key])) {
      obj[key] = obj[key].call(context || obj);
    }
  });

  return obj;
};


});