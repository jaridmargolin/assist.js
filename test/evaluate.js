/*!
 * test/evaluate.js
 * 
 * Copyright (c) 2014
 */

define([
  'underscore',
  'proclaim',
  'sinon',
  'evaluate'
], function (_, assert, sinon, evaluate) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('evaluate.js', function () {

  beforeEach(function () {
    this.base = { test: 'val' };
    this.context = { test: 'val2' };
    this.simple = { key: function () { return 'val'; } };
    this.scoped = { key: function () { return this.test; } };
  });

  it('Should set key value to returned fn value.', function () {
    var evaluated = evaluate(_.extend(this.base, this.simple));

    assert.deepEqual(evaluated, {
      test: 'val',
      key: 'val'
    });
  });

  it('Should call each fn with obj as context.', function () {
    var evaluated = evaluate(_.extend(this.base, this.scoped));

    assert.deepEqual(evaluated, {
      'test': 'val',
      'key': 'val'
    });
  });

  it('Should call each fn with passed context.', function () {
    var evaluated = evaluate(_.extend(this.base, this.scoped), this.context);

    assert.deepEqual(evaluated, {
      'test': 'val',
      'key': 'val2'
    });
  });

});


});