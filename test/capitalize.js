/*!
 * test/capitalize.js
 */

define([
  'proclaim',
  'capitalize'
], function (assert, capitalize) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('capitalize.js', function () {

  it('Should capitalize the first character of the string.', function () {
    var str = 'i should be capitalized';
    assert.equal(capitalize(str), 'I should be capitalized');
  });

});


});