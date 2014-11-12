/*!
 * test/returns.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'returns'
], function (assert, returns) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('returns.js', function () {

  it('Should create a function that when called returns a specified value.', function () {
    var returnUtl = returns('utl');
    assert.equal(returnUtl(), 'utl');
  });

});


});