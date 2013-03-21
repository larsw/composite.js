/*jslint browser: true */
/*global $ */
"use strict";

(function () {
  $(document).ready(function () {

    $.getJSON('client-bootstrappers.json', function (service_clients) {
      var i;
      for (i = 0; i < service_clients.length; i++) {
        $.getScript(service_clients[i]);
      }
    });

  });
}());