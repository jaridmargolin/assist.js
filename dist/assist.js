(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['underscore'], function (underscore) {
      return (root.returnExportsGlobal = factory(underscore));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(require('underscore'));
  } else {
    root['assist'] = factory(root.underscore);
  }
}(this, function (underscore) {

/*!
 * capitalize.js
 * 
 * Copyright (c) 2014
 */
var capitalize, clip, execute, jsonClone, mapValues, parametize, returns, snip, uncapitalize, assist;
capitalize = function (str) {
  return str[0].toUpperCase() + str.slice(1);
};
/*!
 * clip.js
 * 
 * Copyright (c) 2014
 */
clip = function (list, values) {
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
/*!
 * execute.js
 * 
 * Copyright (c) 2014
 */
execute = function (obj, name) {
  if (obj && obj[name]) {
    obj[name].apply(obj, Array.prototype.slice.call(arguments, 2));
  }
};
/*!
 * jsonClone.js
 * 
 * Copyright (c) 2014
 */
jsonClone = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};
/*!
 * mapValues.js
 * 
 * Copyright (c) 2014
 */
mapValues = function (object, iterator) {
  var result = {};
  for (var k in object) {
    result[k] = iterator(object[k], k, object);
  }
  return result;
};
/*!
 * parametize.js
 * 
 * Copyright (c) 2014
 */
parametize = function (url, obj) {
  var hasUrl = arguments.length > 1;
  // Normalize args
  obj = hasUrl ? obj : url;
  // Create param string
  var str = '';
  for (var key in obj) {
    if (str !== '') {
      str += '&';
    }
    str += key + '=' + obj[key];
  }
  return hasUrl ? url + '?' + str : str;
};
/*!
 * returns.js
 * 
 * Copyright (c) 2014
 */
returns = function (value) {
  return function () {
    return value;
  };
};
/*!
 * snip.js
 * 
 * Copyright (c) 2014
 */
snip = function (obj, prop) {
  var val = obj[prop];
  delete obj[prop];
  return val;
};
/*!
 * uncapitalize.js
 * 
 * Copyright (c) 2014
 */
uncapitalize = function (str) {
  return str[0].toLowerCase() + str.slice(1);
};
/*!
 * assist.js
 * 
 * Copyright (c) 2014
 */
assist = {
  capitalize: capitalize,
  clip: clip,
  execute: execute,
  jsonClone: jsonClone,
  mapValues: mapValues,
  parametize: parametize,
  returns: returns,
  snip: snip,
  uncapitalize: uncapitalize
};

return assist;


}));