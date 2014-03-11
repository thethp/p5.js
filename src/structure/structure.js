define(function (require) {

  'use strict';

  var P5 = require('core');

  P5.prototype.exit = function() {
    throw 'Not implemented';
  };

  P5.prototype.noLoop = function() {
    this.settings.loop = false;
  };

  P5.prototype.loop = function() {
    this.settings.loop = true;
  };

  P5.prototype.pushStyle = function() {

    this.styles.push({
      fillStyle: this.curElement.context.fillStyle, // fill
      strokeStyle: this.curElement.context.strokeStyle, // stroke
      lineWidth: this.curElement.context.lineWidth, // strokeWeight
      // @todo tint
      lineCap: this.curElement.context.lineCap, // strokeCap
      lineJoin: this.curElement.context.lineJoin, // strokeJoin
      imageMode: this.settings.imageMode, // imageMode
      rectMode: this.settings.rectMode, // rectMode
      ellipseMode: this.settings.ellipseMode, // ellipseMode
      // @todo shapeMode
      colorMode: this.settings.colorMode, // colorMode
      textAlign: this.curElement.context.textAlign, // textAlign
      textFont: this.settings.textFont,
      textLeading: this.settings.textLeading, // textLeading
      textSize: this.settings.textSize, // textSize
      textStyle: this.settings.textStyle // textStyle
    });
  };

  P5.prototype.popStyle = function() {

    var lastS = this.styles.pop();

    this.curElement.context.fillStyle = lastS.fillStyle; // fill
    this.curElement.context.strokeStyle = lastS.strokeStyle; // stroke
    this.curElement.context.lineWidth = lastS.lineWidth; // strokeWeight
    // @todo tint
    this.curElement.context.lineCap = lastS.lineCap; // strokeCap
    this.curElement.context.lineJoin = lastS.lineJoin; // strokeJoin
    this.settings.imageMode = lastS.imageMode; // imageMode
    this.settings.rectMode = lastS.rectMode; // rectMode
    this.settings.ellipseMode = lastS.ellipseMode; // elllipseMode
    // @todo shapeMode
    this.settings.colorMode = lastS.colorMode; // colorMode
    this.curElement.context.textAlign = lastS.textAlign; // textAlign
    this.settings.textFont = lastS.textFont;
    this.settings.textLeading = lastS.textLeading; // textLeading
    this.settings.textSize = lastS.textSize; // textSize
    this.settings.textStyle = lastS.textStyle; // textStyle

  };

  P5.prototype.redraw = function() {
    throw 'Not implemented';
  };

  P5.prototype.size = function() {
    throw 'Not implemented';
  };

  return P5;

});