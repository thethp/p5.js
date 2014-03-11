/* Log
    log()
*/

define(function (require) {

  'use strict';

  var P5 = require('core');

  P5.prototype.log = function() {
    if (window.console && console.log) {
      console.log.apply(console, arguments);
    }
  };

  return P5;

});