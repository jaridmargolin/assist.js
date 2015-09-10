/*
 * test/assist.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'assist'
], function (assert, _) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('assist.js', function () {

  it('Should expose methods.', function () {
    assert.ok(_.decorate);
    assert.ok(_.deepMerge);
    assert.ok(_.evaluate);
    assert.ok(_.execute);
    assert.ok(_.jsonClone);
    assert.ok(_.mapValues);
    assert.ok(_.parametize);
    assert.ok(_.snip);
  });

});


});