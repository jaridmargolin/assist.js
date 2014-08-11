/*!
 * test/snip.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'sinon',
  'assist/snip'
], function (assert, sinon, snip) {


// ----------------------------------------------------------------------------
// Test
// ----------------------------------------------------------------------------

describe('snip.js', function () {

  beforeEach(function () {
    this.obj = { key: 'val' };
  });

  it('Should delete property from object.', function () {
    snip(this.obj, 'key');

    assert.deepEqual(this.obj, {});
  });

  it('Should return value of deleted property.', function () {
    var snipped = snip(this.obj, 'key');

    assert.deepEqual(snipped, 'val');
  });

});


});