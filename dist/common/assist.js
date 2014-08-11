/*!
 * assist.js
 * 
 * Copyright (c) 2014
 */

var decorate = require('underscore');
var evaluate = require('assist/decorate');
var execute = require('assist/evaluate');
var parametize = require('assist/execute');
var snip = require('assist/parametize');


// ----------------------------------------------------------------------------
// Mixin
// ----------------------------------------------------------------------------

_.mixin({
  decorate: decorate,
  evaluate: evaluate,
  execute: execute,
  parametize: parametize,
  snip: snip
});


// ----------------------------------------------------------------------------
// Expose
// ----------------------------------------------------------------------------

module.exports = _;


