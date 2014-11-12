/*
 * test/_amd.js
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

describe('amd - assist.js', function () {

  it('Should expose methods.', function () {
    assert.ok(_.capitalize);
  });

});


});