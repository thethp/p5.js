define(function (require) {

  'use strict';

  var P5 = require('core');
  var reqwest = require('reqwest');

  //BufferedReader
  P5.prototype.createInput = function() {
    // TODO

  };

  P5.prototype.createReader = function() {
    // TODO

  };

  P5.prototype.loadBytes = function() {
    // TODO

  };

  P5.prototype.loadJSON = function(path, callback) {
    var ret = [];
    var t = path.indexOf('http') === -1 ? 'json' : 'jsonp';
    reqwest({url: path, type: t, success: function (resp) {
      for (var k in resp) {
        ret[k] = resp[k];
      }
      if (typeof callback !== 'undefined') {
        callback(ret);
      }
    }});
  };

  P5.prototype.loadStrings = function(path, callback) {
    var ret = [];
    var req = new XMLHttpRequest();
    req.open('GET', path, true);
    req.onreadystatechange = function () {
      if((req.readyState === 4) && (req.status === 200 || req.status === 0)) {
        var arr = req.responseText.match(/[^\r\n]+/g);
        for (var k in arr) {
          ret[k] = arr[k];
        }
        if (typeof callback !== 'undefined') {
          callback(ret);
        }
      }
    };
    req.send(null);
  };

  P5.prototype.loadTable = function () {
    // TODO

  };


  P5.prototype.loadXML = function(path, callback) {
    var ret = [];
    var self = this;
    self.temp = [];
    reqwest(path, function (resp) {
      self.log(resp);
      self.temp = resp;
      ret[0] = resp;
      if (typeof callback !== 'undefined') {
        callback(ret);
      }
    });
  };

  P5.prototype.open = function() {
    // TODO

  };

  P5.prototype.parseXML = function() {
    // TODO

  };

  P5.prototype.saveTable = function() {
    // TODO

  };

  P5.prototype.selectFolder = function() {
    // TODO

  };

  P5.prototype.selectInput = function() {
    // TODO

  };

  return P5;

});
