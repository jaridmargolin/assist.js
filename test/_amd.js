/*
 * test/_amd.js
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