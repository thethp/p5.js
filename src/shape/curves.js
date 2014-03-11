define(function (require) {

  'use strict';

  var P5 = require('core');

  P5.prototype.bezier = function(x1, y1, x2, y2, x3, y3, x4, y4) {
    this.curElement.context.beginPath();
    this.curElement.context.moveTo(x1, y1);
    this.curElement.context.bezierCurveTo(x2, y2, x3, y3, x4, y4);
    this.curElement.context.stroke();

    return this;
  };

  P5.prototype.bezierDetail = function() {
    // TODO

  };

  P5.prototype.bezierPoint = function() {
    // TODO

  };

  P5.prototype.bezierTangent = function() {
    // TODO

  };

  P5.prototype.curve = function() {
    // TODO

  };

  P5.prototype.curveDetail = function() {
    // TODO

  };

  P5.prototype.curvePoint = function() {
    // TODO

  };

  P5.prototype.curveTangent = function() {
    // TODO

  };

  P5.prototype.curveTightness = function() {
    // TODO

  };

  return P5;

});