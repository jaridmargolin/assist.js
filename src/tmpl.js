/*!
 * tmpl.js
 * 
 * Copyright (c) 2014
 */

define(function () {


/* -----------------------------------------------------------------------------
 * tmpl
 * ---------------------------------------------------------------------------*/

/**
 * Micro template function.
 *
 * @example
 * var msg = tmpl('{0}{1}{1}', ['msg','!']);
 * var msg = tmpl('{text}{punctuation}{punctuation}', {
 *   text: 'msg',
 *   punctuation: '!'
 * });
 * // msg!!
 *
 * @public
 *
 * @param {string} str - string to template.
 * @param {array|object} data - object or array of values to template.
 */
return function (str, data) {
  return str.replace(/{([^{}]*)}/g, function(a, b) {
    return typeof data[b] === 'string' ? data[b] : a;
  });
};


});