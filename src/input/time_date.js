define(function (require) {

  'use strict';

  var P5 = require('core');

  P5.prototype.day = function() {
    return new Date().getDate();
  };

  P5.prototype.hour = function() {
    return new Date().getHours();
  };

  P5.prototype.minute = function() {
    return new Date().getMinutes();
  };

  P5.prototype.millis = function() {
    return new Date().getTime() - this.startTime;
  };

  P5.prototype.month = function() {
    return new Date().getMonth();
  };

  P5.prototype.second = function() {
    return new Date().getSeconds();
  };

  P5.prototype.year = function() {
    return new Date().getFullYear();
  };

  return P5;

});