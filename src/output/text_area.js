define(function (require) {

  'use strict';

  var P5 = require('core');

  require('log');

  P5.prototype.print = P5.prototype.log;
  P5.prototype.println = P5.prototype.log;

  return P5;
});