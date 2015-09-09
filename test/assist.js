/*
 * test/assist.js
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
    assert.ok(_.capitalize);
    assert.ok(_.clip);
    assert.ok(_.execute);
    assert.ok(_.jsonClone);
    assert.ok(_.mapValues);
    assert.ok(_.parametize);
    assert.ok(_.returns);
    assert.ok(_.snip);
    assert.ok(_.uncapitalize);
  });

});


});