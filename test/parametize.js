/*!
 * test/parametize.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'sinon',
  'parametize'
], function (assert, sinon, parametize) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('parametize.js', function () {

  it('Should convert key value pairs to str.', function () {
    var params = { param1: 1, param2: 'value' };
    var expected = 'param1=1&param2=value';

    assert.equal(parametize(params), expected);
  });

  it('Should convert key value pairs to str and append as url query.', function () {
    var params = { param1: 1, param2: 'value' };
    var url = 'http://firstopinionapp.com';
    var expected = url + '?param1=1&param2=value';

    assert.equal(parametize(url, params), expected);
  });
  
});


});