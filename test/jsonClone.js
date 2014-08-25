/*!
 * test/jsonClone.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
  'proclaim',
  'sinon',
  'jsonClone'
], function (_, assert, sinon, jsonClone) {


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