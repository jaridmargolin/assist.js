/*!
 * assist.js
 * 
 * Copyright (c) 2014
 */

var _ = require('underscore');
var decorate = require('./decorate-underscore');
var deepMerge = require('./deepMerge-underscore');
var evaluate = require('./evaluate-underscore');
var execute = require('./execute');
var jsonClone = require('./jsonClone');
var parametize = require('./parametize');
var snip = require('./snip');


/* -----------------------------------------------------------------------------
 * mixin
 * ---------------------------------------------------------------------------*/

_.mixin({
  decorate: decorate,
  deepMerge: deepMerge,
  evaluate: evaluate,
  execute: execute,
  jsonClone: jsonClone,
  parametize: parametize,
  snip: snip
});


/* -----------------------------------------------------------------------------
 * export
 * ---------------------------------------------------------------------------*/

module.exports = _;


