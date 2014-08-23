/*!
 * test/decorate.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'sinon',
  'decorate-underscore'
], function (assert, sinon, decorate) {


/* -----------------------------------------------------------------------------
 * reusable
 * ---------------------------------------------------------------------------*/

var decorator1 = function (fn, data) {
  data['1'] = true;
  fn(data);
};

var decorator2 = function (fn, data) {
  if (data['1']) {
    data['2'] = true;
  }
  
  fn(data);
};


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('decorate-underscore.js', function () {

  it('Should call decorators in order.', function () {
    var fn = function (data) {
      assert.deepEqual(data, { 1: true, 2: true });
    };

    decorate([decorator1, decorator2], fn)({});
  });

});


});