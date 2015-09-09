/*!
 * test/mapValues.js
 */

define([
  'proclaim',
  'mapValues'
], function (assert, mapValues) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('mapValues.js', function () {

  beforeEach(function () {
    this.toMap = { 'key': 'value' };
  });

  it('Should returns a new object with mapped values.', function () {
    var mapped = mapValues(this.toMap, function (value, key) {
      return 'mapped-' + value;
    });

    assert.deepEqual(mapped, { 'key': 'mapped-value' });
  });

  it('Should not alter original object.', function () {
    var mapped = mapValues(this.toMap, function (value, key) {
      return 'mapped-' + value;
    });

    assert.deepEqual(this.toMap, { 'key': 'value' });
  });


});


});