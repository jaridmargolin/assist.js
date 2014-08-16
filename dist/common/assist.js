/*!
 * assist.js
 * 
 * Copyright (c) 2014
 */

var _ = require('underscore');
var decorate = require('./decorate');
var evaluate = require('./evaluate');
var execute = require('./execute');
var parametize = require('./parametize');
var snip = require('./snip');


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

module.exports = _;


