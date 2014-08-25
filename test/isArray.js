/*!
 * test/isArray.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
  'proclaim',
  'sinon',
  'isArray'
], function (_, assert, sinon, isArray) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('isArray.js', function () {

  it('Should return true if value is an Array.', function () {
    assert.isTrue(isArray([]));
  });

  it('Should return false if value is not an Array.', function () {
    assert.isFalse(isArray({}));
  });

});


});