/*!
 * test/uncapitalize.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'uncapitalize'
], function (assert, uncapitalize) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('uncapitalize.js', function () {

  it('Should uncapitalize the first character of the string.', function () {
    var str = 'CamelCase';
    assert.equal(uncapitalize(str), 'camelCase');
  });

});


});