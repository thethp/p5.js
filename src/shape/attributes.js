define(function (require) {

  'use strict';

  var P5 = require('core');
  var constants = require('constants');

  P5.prototype.ellipseMode = function(m) {
    if (m === constants.CORNER || m === constants.CORNERS || m === constants.RADIUS || m === constants.CENTER) {
      this.settings.ellipseMode = m;
    }

    return this;
  };

  P5.prototype.noSmooth = function() {
    this.curElement.context.mozImageSmoothingEnabled = false;
    this.curElement.context.webkitImageSmoothingEnabled = false;

    return this;
  };

  P5.prototype.rectMode = function(m) {
    if (m === constants.CORNER || m === constants.CORNERS || m === constants.RADIUS || m === constants.CENTER) {
      this.settings.rectMode = m;
    }

    return this;
  };

  P5.prototype.smooth = function() {
    this.curElement.context.mozImageSmoothingEnabled = true;
    this.curElement.context.webkitImageSmoothingEnabled = true;

    return this;
  };

  P5.prototype.strokeCap = function(cap) {
    if (cap === constants.ROUND || cap === constants.SQUARE || cap === constants.PROJECT) {
      this.curElement.context.lineCap=cap;
    }

    return this;
  };

  P5.prototype.strokeJoin = function(join) {
    if (join === constants.ROUND || join === constants.BEVEL || join === constants.MITER) {
      this.curElement.context.lineJoin = join;
    }

    return this;
  };

  P5.prototype.strokeWeight = function(w) {
    if (typeof w === 'undefined' || w === 0) {
      this.curElement.context.lineWidth = 0.0001; // hack because lineWidth 0 doesn't work
    } else {
      this.curElement.context.lineWidth = w;
    }

    return this;
  };

  return P5;

});
