/*!
 * test/deepMerge.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
  'proclaim',
  'sinon',
  'deepMerge-underscore'
], function (_, assert, sinon, deepMerge) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('deepMerge.js', function () {

  beforeEach(function () {
    // Dest object
    this.names = {
      'characters': [ { 'name': 'barney' }, { 'name': 'fred' } ]
    };

    // Merge object
    this.ages = {
      'characters': [ { 'age': 36 }, { 'age': 40 } ]
    };
  });

  it('Should recursively merge properties from obj to dest.', function () {
    assert.deepEqual(deepMerge(this.names, this.ages), { 'characters': [
      { 'name': 'barney', 'age': 36 },
      { 'name': 'fred', 'age': 40 }]
    });
  });

});


});