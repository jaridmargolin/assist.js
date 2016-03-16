/*!
 * clip.js
 */




/* -----------------------------------------------------------------------------
 * clip
 * ---------------------------------------------------------------------------*/

/**
 * Remove all values from list with specified values.
 *
 * @example
 * _.clip([1, 2, 3, 4], [2, 4]);
 * // [1,3]
 *
 * @public
 *
 * @param {array} list - List to remove values from.
 * @param {array|string} values - Values to remove from list.
 */
module.exports = function (list, values) {
  var listLength = list.length;
  var valuesLength = values.length;

  // Loop backwards so that when we remove a value
  // from the array we don't have to adjust our
  // incrementer.
  while (listLength--) {
    for (var i = 0; i < valuesLength; i++) {
      if (values[i] === list[listLength]) {
        list.splice(listLength, 1);
      }
    }
  }

  return list;
};


