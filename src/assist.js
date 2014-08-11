/*!
 * assist.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
  'assist/decorate',
  'assist/evaluate',
  'assist/execute',
  'assist/parametize',
  'assist/snip',  
], function (decorate, evaluate, execute, parametize, snip) {


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

return _;


});