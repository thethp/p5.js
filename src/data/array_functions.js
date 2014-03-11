define(function (require) {

  'use strict';

  var P5 = require('core');

  P5.prototype.append = function(array, value) {
    array.push(value);
    return array;
  };

  P5.prototype.arrayCopy = function(src, srcPosition, dst, dstPosition, length) { //src, srcPosition, dst, dstPosition, length
    if (typeof length !== 'undefined') {
      for (var i=srcPosition; i < Math.min(srcPosition + length, src.length); i++) {
        dst[dstPosition+i] = src[i];
      }
    }
    else if (typeof dst !== 'undefined') { //src, dst, length
      srcPosition = src.slice(0, Math.min(dst, src.length));
    }
    else { //src, dst
      srcPosition = src.slice(0);
    }
  };

  P5.prototype.concat = function(list0, list1) {
    return list0.concat(list1);
  };

  P5.prototype.reverse = function(list) {
    return list.reverse();
  };

  P5.prototype.shorten = function(list) {
    list.pop();
    return list;
  };

  P5.prototype.sort = function(list, count) {
    var arr = count ? list.slice(0, Math.min(count, list.length)) : list;
    var rest = count ? list.slice(Math.min(count, list.length)) : [];
    if (typeof arr[0] === 'string') {
      arr = arr.sort();
    } else {
      arr = arr.sort(function(a,b){return a-b;});
    }
    return arr.concat(rest);
  };

  P5.prototype.splice = function(list, value, index) {
    return list.splice(index,0,value);
  };

  P5.prototype.subset = function(list, start, count) {
    if (typeof count !== 'undefined') {
      return list.slice(start, start+count);
    } else {
      return list.slice(start, list.length-1);
    }
  };

  return P5;

});