define(function (require) {

  'use strict';

  var P5 = require('core');

  P5.prototype.abs = Math.abs;

  P5.prototype.ceil = Math.ceil;

  P5.prototype.constrain = function(n, l, h) {
    return this.max(this.min(n, h), l);
  };

  P5.prototype.dist = function(x1, y1, x2, y2) {
    var xs = x2-x1;
    var ys = y2-y1;
    return Math.sqrt( xs*xs + ys*ys );
  };

  P5.prototype.exp = Math.exp;

  P5.prototype.floor = Math.floor;

  P5.prototype.lerp = function(start, stop, amt) {
    return amt*(stop-start)+start;
  };

  P5.prototype.log = Math.log;

  P5.prototype.mag = function(x, y) {
    return Math.sqrt(x*x+y*y);
  };

  P5.prototype.map = function(n, start1, stop1, start2, stop2) {
    return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
  };

  P5.prototype.max = Math.max;

  P5.prototype.min = Math.min;

  P5.prototype.norm = function(n, start, stop) { return this.map(n, start, stop, 0, 1); };

  P5.prototype.pow = Math.pow;

  P5.prototype.round = Math.round;

  P5.prototype.sq = function(n) { return n*n; };

  P5.prototype.sqrt = Math.sqrt;

  return P5;

});
