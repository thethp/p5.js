define(function (require) {

  'use strict';

  var P5 = require('core');
  var polarGeometry = require('polargeometry');
  var constants = require('constants');

  P5.prototype.acos = Math.acos;

  P5.prototype.asin = Math.asin;

  P5.prototype.atan = Math.atan;

  P5.prototype.atan2 = Math.atan2;

  P5.prototype.cos = function(x) {
    return Math.cos(this.radians(x));
  };

  P5.prototype.degrees = function(angle) {
    return this.settings.angleMode === constants.DEGREES ? angle : polarGeometry.radiansToDegrees(angle);
  };

  P5.prototype.radians = function(angle) {
    return this.settings.angleMode === constants.RADIANS ? angle : polarGeometry.degreesToRadians(angle);
  };

  P5.prototype.sin = function(x) {
    return Math.sin(this.radians(x));
  };

  P5.prototype.tan = function(x) {
    return Math.tan(this.radians(x));
  };

  P5.prototype.angleMode = function(mode) {
    if (mode === constants.DEGREES || mode === constants.RADIANS) {
      this.settings.angleMode = mode;
    }
  };

  return P5;

});