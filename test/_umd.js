/*
 * test/_umd.js
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