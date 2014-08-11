/*
 * test/_dist-amd.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'assist/assist'
], function (assert, _) {


// ----------------------------------------------------------------------------
// Test
// ----------------------------------------------------------------------------

describe('amd - assist.js', function () {

  it('Should expose methods.', function () {
    assert.ok(_.decorate);
    assert.ok(_.evaluate);
    assert.ok(_.execute);
    assert.ok(_.parametize);
    assert.ok(_.snip);
  });

});


});