/*!
 * mapValues.js
 * 
 * Copyright (c) 2014
 */




/* -----------------------------------------------------------------------------
 * mapValues
 * ---------------------------------------------------------------------------*/

/**
 * Creates and returns a new object whose keys are identical and whose
 * values are equal to the return value generated by the passed iterator.
 * The iterator is invoked with three arguments; (value, key, object).
 *
 * @example
 * var mapped = mapValues({
 *   'key': 'value'
 * }, function (value, key, object) {
 *   return 'mapped-' + value;
 * });
 *
 * @public
 *
 * @param {object} object - The object to iterate over.
 * @param {function} iterator - The function to call for every iteration.
 */
module.exports = function (object, iterator) {
  var result = {};

  for (var k in object) {
    result[k] = iterator(object[k], k, object);
  }
  _.each(object, function (value, key) {
    
  });

  return result;
};


