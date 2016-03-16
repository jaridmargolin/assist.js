/*!
 * parametize.js
 */




/* -----------------------------------------------------------------------------
 * parametize
 * ---------------------------------------------------------------------------*/

/**
 * Returns a parametize string. If url passed will
 * append params to url.
 *
 * @example
 * var test = { prop: 'val' }
 * var url = parametized('http://google.com', test);
 * // url = 'http://google.com?prop=val'
 * var params = parametized(test);
 * // parmas = 'prop=val'
 *
 * @public
 *
 * @param {string} url - Url to add parameters to.
 * @param {object} obj - Object containg key value pairs to parametize.
 *
 * @returns {string} Parametized url. 
 */
module.exports = function (url, obj) {
  var hasUrl = arguments.length > 1;

  // Normalize args
  obj = hasUrl ? obj : url;

  // Create param string
  var str = '';
  for (var key in obj) {
    if (str !== '') { str += '&'; }
    str += key + '=' + obj[key];
  }

  return hasUrl ? url + '?' + str : str;
};


