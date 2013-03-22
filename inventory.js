/*jslint browser: true */
/*global $, viewmodel, ko, eventEmitter */
"use strict";

(function () {

  viewmodel.inventory = {
    products : ko.observableArray([
      {id: 1, name: "Apple"},
      {id: 2, name: "Pear"},
      {id: 3, name: "Banana"}
    ])
  };

  var widget = $('<span>Glory, glory Man United.</span>');
  $('#inventory').append(widget);

  eventEmitter.emit('viewModelUpdated', {});
}());