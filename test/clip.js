/*!
 * test/clip.js
 */

define([
  'proclaim',
  'clip'
], function (assert, clip) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('clip.js', function () {

  beforeEach(function () {
    this.removeFrom = [1, 2, 3, 4];
    this.toRemove = [2, 4];
  });

  it('Should remove values from array.', function () {
    clip(this.removeFrom, this.toRemove);

    assert.deepEqual(this.removeFrom, [1, 3]);
  });

  it('Should return modified array.', function () {
    var result = clip(this.removeFrom, this.toRemove);

    assert.equal(result, this.removeFrom);
  });

});


});