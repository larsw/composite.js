/*jslint browser: true */
/*global $, viewmodel, ko, eventEmitter */
"use strict";

(function () {
  viewmodel.pricing = [];
  viewmodel.pricing[1] = ko.observable(12.1);
  viewmodel.pricing[2] = ko.observable(14.5);
  viewmodel.pricing[3] = ko.observable(9.3);

  var widget = $('<span>Blue ocean.</span>');
  $('#pricing').append(widget);

  eventEmitter.emit('viewModelUpdated', {});

}());