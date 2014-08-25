/*!
 * test/isObject.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
  'proclaim',
  'sinon',
  'isObject'
], function (_, assert, sinon, isObject) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('isObject.js', function () {

  it('Should return true if value is an Object.', function () {
    assert.isTrue(isObject({}));
  });

  it('Should return false if value is not an Object.', function () {
    assert.isFalse(isObject(true));
  });

});


});