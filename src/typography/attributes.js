define(function (require) {

  'use strict';

  var P5 = require('core');
  var constants = require('constants');

  P5.prototype.textAlign = function(a) {
    if (a === constants.LEFT || a === constants.RIGHT || a === constants.CENTER) {
      this.curElement.context.textAlign = a;
    }
  };

  P5.prototype.textFont = function(str) {
    this._setProperty('_textFont', str); //pend temp?
  };

  P5.prototype.textHeight = function(s) {
    return this.curElement.context.measureText(s).height;
  };

  P5.prototype.textLeading = function(l) {
    this._setProperty('_textLeading', l);
  };

  P5.prototype.textSize = function(s) {
    this._setProperty('_textSize', s);
  };

  P5.prototype.textStyle = function(s) {
    if (s === constants.NORMAL || s === constants.ITALIC || s === constants.BOLD) {
      this._setProperty('_textStyle', s);
    }
  };

  P5.prototype.textWidth = function(s) {
    return this.curElement.context.measureText(s).width;
  };

  return P5;

});
