/*!
 * assist.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
  './decorate-underscore',
  './evaluate-underscore',
  './execute',
  './parametize',
  './snip',  
], function (_, decorate, evaluate, execute, parametize, snip) {


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


});