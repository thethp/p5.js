define(function (require) {

  'use strict';

  var P5 = require('core');

  P5.prototype.save = function() {
    this.open(this.curElement.elt.toDataURL('image/png'));
  };

  return P5;
});