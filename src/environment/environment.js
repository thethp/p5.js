define(function (require) {

  'use strict';

  var P5 = require('core');

  P5.prototype.cursor = function(type) {
    this.curElement.style.cursor = type || 'auto';
  };

  P5.prototype.frameRate = function(fps) {
    if (typeof fps === 'undefined') {
        return this._frameRate;
    } else {
      this._setProperty('_targetFrameRate', fps);
      this._runFrames();
      return this;
    }
  };

  P5.prototype.getFrameRate = function() {
    return this.frameRate();
  };

  P5.prototype.setFrameRate = function(fps) {
    return this.frameRate(fps);
  };

  P5.prototype.noCursor = function() {
    this.curElement.style.cursor = 'none';
  };

  return P5;

});