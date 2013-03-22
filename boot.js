/*jslint browser: true */
/*global $, ko, EventEmitter */
"use strict";

var viewmodel = {};
var eventEmitter = new EventEmitter();

(function () {
  $(document).ready(function () {

    eventEmitter.apply(this);

    eventEmitter.on('viewModelUpdated', function (data) {
      ko.applyBindings(ko.mapping.fromJS(viewmodel));
    });

    $.getJSON('client-bootstrappers.json', function (service_clients) {
      var i;
      for (i = 0; i < service_clients.length; i++) {
        $.getScript(service_clients[i]);
      }
    });
  });
}());