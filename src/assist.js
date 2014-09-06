/*!
 * assist.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
  './decorate-underscore',
  './deepMerge-underscore',
  './evaluate-underscore',
  './execute',
  './jsonClone',
  './mapValues',
  './parametize',
  './snip',  
], function (_, decorate, deepMerge, evaluate, execute, jsonClone, mapValues, parametize, snip) {


/* -----------------------------------------------------------------------------
 * mixin
 * ---------------------------------------------------------------------------*/

_.mixin({
  decorate: decorate,
  deepMerge: deepMerge,
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

return _;


});