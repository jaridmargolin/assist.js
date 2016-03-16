/*!
 * execute.js
 */

define(function () {


/* -----------------------------------------------------------------------------
 * execute
 * ---------------------------------------------------------------------------*/

/**
 * Execute method if it exists on obj.
 *
 * @example
 * var test = { key: function () { return 'str'; } }
 * execute(test, key, arguments..);
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
    return obj[name].apply(obj, Array.prototype.slice.call(arguments, 2));
  }
};


});