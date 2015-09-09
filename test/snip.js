/*!
 * test/snip.js
 */

define([
  'proclaim',
  'snip'
], function (assert, snip) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

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