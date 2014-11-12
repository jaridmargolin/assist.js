/*
 * test/_umd.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'assist/assist'
], function (assert, _) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('umd - assist.js', function () {

  it('Should expose methods.', function () {
    assert.ok(_.capitalize);
  });

});


});