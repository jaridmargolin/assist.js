/*!
 * decorate.js
 * 
 * Copyright (c) 2014
 */

var _ = require('underscore');


/* -----------------------------------------------------------------------------
 * decorate
 * ---------------------------------------------------------------------------*/

/**
 * Wrapper around _.wrap to allow a chain of methods
 * to be applied before a fn. Acts similiar to python
 * decorators. Great for use on route methods (auth,
 * argument checking, etc...)
 *
 * @example
 * var route = decorate([
 *   authenticate,
 *   showApp
 * ], handleRoute);
 *
 * @public
 *
 * @param {array} decorators - Chain of methods to call before final fn.
 *
 * @returns Decorated function.
 */
module.exports = function (decorators, original) {
  // Start at first decorator and work backwards
  var i = decorators.length;
  var fn;

  while((i--) > 0) {
    fn = _.wrap(fn ? fn : original, decorators[i]);
  }

  return fn;
};


