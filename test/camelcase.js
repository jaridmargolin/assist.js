/*!
 * test/camelcase.js
 */

define([
  'proclaim',
  'camelcase'
], function (assert, camelcase) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('camelcase.js', function () {

  it('Should camelcase the first character between each seperator.', function () {
    var str1 = 'i-should-be-camel';
    var str2 = 'i-should-too';
    var str3 = 'what_about-me';

    assert.equal(camelcase(str1), 'IShouldBeCamel');
    assert.equal(camelcase(str2), 'IShouldToo');
    assert.equal(camelcase(str3), 'WhatAboutMe');
  });

});


});