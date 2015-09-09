/*!
 * test/jsonClone.js
 */

define([
  'proclaim',
  'jsonClone'
], function (assert, jsonClone) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('jsonClone.js', function () {

  it('Should clone object properties to new object.', function () {
    var obj = { nested: { key: 'value' }, prop: 'value' };

    assert.notEqual(jsonClone(obj), obj);
    assert.deepEqual(jsonClone(obj), obj);
  });

});


});