/*!
 * execute.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
], function (_) {


// ----------------------------------------------------------------------------
// execute
// ----------------------------------------------------------------------------

/**
 * Execute method if it exists on obj.
 *
 * @example
 * var test = { key: function () { return 'str'; } }
 * _.execute(test, key, arguments..);
 *
 * @public
 *
 * @param {object} obj - Object to execute method on.
 * @param {string} name - Name of method to call.
 *
 * @returns Evaluated object.
 */
return function (obj, name) {
  if (obj && obj[name]) {
    obj[name].apply(obj, _.rest(arguments, 2));
  }
};


});