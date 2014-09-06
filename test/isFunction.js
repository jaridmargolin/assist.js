/*!
 * test/isFunction.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
  'proclaim',
  'sinon',
  'isFunction'
], function (_, assert, sinon, isFunction) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('isFunction.js', function () {

  it('Should return true if value is a Function.', function () {
    assert.isTrue(isFunction(function () {}));
  });

  it('Should return false if value is not a Function.', function () {
    assert.isFalse(isFunction(true));
  });

});


});