/*!
 * test/tmpl.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
  'proclaim',
  'sinon',
  'tmpl'
], function (_, assert, sinon, tmpl) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('tmpl.js', function () {

  it('Should template array of values.', function () {
    var msg = tmpl('{0}{1}{1}', ['msg','!']);
    
    assert.equal(msg, 'msg!!');
  });

  it('Should template objet values.', function () {
    var msg = tmpl('{text}{punctuation}{punctuation}', {
      text: 'msg',
      punctuation: '!'
    });
    
    assert.equal(msg, 'msg!!');
  });

});


});