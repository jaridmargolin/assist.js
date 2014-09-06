/*!
 * assist.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
  './clip',
  './decorate-underscore',
  './deepMerge-underscore',
  './evaluate-underscore',
  './execute',
  './jsonClone',
  './mapValues',
  './parametize',
  './snip',  
], function (_, clip, decorate, deepMerge, evaluate, execute, jsonClone, mapValues, parametize, snip) {


/* -----------------------------------------------------------------------------
 * mixin
 * ---------------------------------------------------------------------------*/

_.mixin({
  clip: clip,
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