/*!
 * uncapitalize.js
 */

define(function () {


/* -----------------------------------------------------------------------------
 * uncapitalize
 * ---------------------------------------------------------------------------*/

/**
 * Little helper to uncapitalize used for creating method names
 * from event data.
 *
 * @public
 *
 * @param {string} str - String to uncapitalize.
 */
return function (str) {
  return str[0].toLowerCase() + str.slice(1);
};


});