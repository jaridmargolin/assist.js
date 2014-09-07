/*!
 * encase.js
 * 
 * Copyright (c) 2014
 */

var _ = require('underscore');


/* -----------------------------------------------------------------------------
 * encase
 * ---------------------------------------------------------------------------*/

/**
 * Wrap an object method with a decorator. If no
 * property exists, create a dummy fn.
 *
 * @example
 * decorate(settings, 'beforeSend', decorator);
 *
 * @public
 *
 * @param {object} obj - Object containing method to decorate.
 * @param {string} method - Name representing method to decorate.
 * @param {function} decorator - Function that is called prior to
 *   object method.
 */
module.exports = function (obj, method, decorator) {
  // We need to grab the current fn or create a dummy.
  var fn  = obj[method] || function () {};

  // Only decorate functions Dawg!
  if (typeof fn === 'function') {
    obj[method] = _.wrap(function () {
      fn.apply(obj, arguments);
    }, decorator);
  }
};


