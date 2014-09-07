/*!
 * test/isEmpty.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
  'proclaim',
  'sinon',
  'isEmpty'
], function (_, assert, sinon, isEmpty) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('isEmpty.js', function () {

  it('Should return true if object contains no keys.', function () {
    assert.isTrue(isEmpty({}));
  });

  it('Should return true if array contains no keys.', function () {
    assert.isTrue(isEmpty([]));
  });

  it('Should return false if object contains one or more keys.', function () {
    assert.isFalse(isEmpty({ 'key': 'value' }));
  });

  it('Should return false if array contains one or more keys.', function () {
    assert.isFalse(isEmpty(['key']));
  });

});


});