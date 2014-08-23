(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['underscore'], function (underscore) {
      return (root.returnExportsGlobal = factory(underscore));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(require('underscore'));
  } else {
    root['assist'] = factory(root.underscore);
  }
}(this, function (underscore) {

/*!
 * decorate.js
 * 
 * Copyright (c) 2014
 */
var decorateUnderscore, evaluateUnderscore, execute, parametize, snip, assist;
decorateUnderscore = function (_) {
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
  return function (decorators, original) {
    // Start at first decorator and work backwards
    var i = decorators.length;
    var fn;
    while (i-- > 0) {
      fn = _.wrap(fn ? fn : original, decorators[i]);
    }
    return fn;
  };
}(underscore);
/*!
 * evaluate.js
 * 
 * Copyright (c) 2014
 */
evaluateUnderscore = function (_) {
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
}(underscore);
/*!
 * execute.js
 * 
 * Copyright (c) 2014
 */
execute = function (obj, name) {
  if (obj && obj[name]) {
    obj[name].apply(obj, Array.prototype.slice.call(arguments, 2));
  }
};
/*!
 * parametize.js
 * 
 * Copyright (c) 2014
 */
parametize = function (url, obj) {
  var hasUrl = arguments.length > 1;
  // Normalize args
  obj = hasUrl ? obj : url;
  // Create param string
  var str = '';
  for (var key in obj) {
    if (str !== '') {
      str += '&';
    }
    str += key + '=' + obj[key];
  }
  return hasUrl ? url + '?' + str : str;
};
/*!
 * snip.js
 * 
 * Copyright (c) 2014
 */
snip = function (obj, prop) {
  var val = obj[prop];
  delete obj[prop];
  return val;
};
/*!
 * assist.js
 * 
 * Copyright (c) 2014
 */
assist = function (_, decorate, evaluate, execute, parametize, snip) {
  /* -----------------------------------------------------------------------------
   * mixin
   * ---------------------------------------------------------------------------*/
  _.mixin({
    decorate: decorate,
    evaluate: evaluate,
    execute: execute,
    parametize: parametize,
    snip: snip
  });
  /* -----------------------------------------------------------------------------
   * export
   * ---------------------------------------------------------------------------*/
  return _;
}(underscore, decorateUnderscore, evaluateUnderscore, execute, parametize, snip);

return assist;


}));