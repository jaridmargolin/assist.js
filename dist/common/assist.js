/*!
 * assist.js
 * 
 * Copyright (c) 2014
 */

var _ = require('underscore');
var clip = require('./clip');
var decorate = require('./decorate-underscore');
var deepMerge = require('./deepMerge-underscore');
var encase = require('./encase-underscore');
var evaluate = require('./evaluate-underscore');
var execute = require('./execute');
var jsonClone = require('./jsonClone');
var mapValues = require('./mapValues');
var parametize = require('./parametize');
var snip = require('./snip');


/* -----------------------------------------------------------------------------
 * mixin
 * ---------------------------------------------------------------------------*/

_.mixin({
  clip: clip,
  decorate: decorate,
  deepMerge: deepMerge,
  encase: encase,
  evaluate: evaluate,
  execute: execute,
  jsonClone: jsonClone,
  mapValues: mapValues,
  parametize: parametize,
  snip: snip
});


/* -----------------------------------------------------------------------------
 * export
 * ---------------------------------------------------------------------------*/

module.exports = _;


