define(function (require) {

  'use strict';

  var P5 = require('core');

  P5.prototype.beginRaw = function() {
    // TODO

  };

  P5.prototype.beginRecord = function() {
    // TODO

  };

  P5.prototype.createOutput = function() {
    // TODO

  };

  P5.prototype.createWriter  = function(name) {
    if (this.pWriters.indexOf(name) === -1) { // check it doesn't already exist
      this.pWriters.name = new this.PrintWriter(name);
    }
  };

  P5.prototype.endRaw = function() {
    // TODO

  };

  P5.prototype.endRecord  = function() {
    // TODO

  };

  P5.prototype.escape = function(content) {
    return content;
  };

  P5.prototype.PrintWriter = function(name) {
     this.name = name;
     this.content = '';
     this.print = function(data) { this.content += data; };
     this.println = function(data) { this.content += data + '\n'; };
     this.flush = function() { this.content = ''; };
     this.close = function() { this.writeFile(this.content); };
  };

  P5.prototype.saveBytes = function() {
    // TODO

  };

  P5.prototype.saveJSONArray = function() {
    // TODO

  };

  P5.prototype.saveJSONObject = function() {
    // TODO

  };

  P5.prototype.saveStream = function() {
    // TODO

  };

  P5.prototype.saveStrings = function(list) {
    this.writeFile(list.join('\n'));
  };

  P5.prototype.saveXML = function() {
    // TODO

  };

  P5.prototype.selectOutput = function() {
    // TODO

  };

  P5.prototype.writeFile = function(content) {
    this.open('data:text/json;charset=utf-8,' + this.escape(content), 'download');
  };

  return P5;

});
