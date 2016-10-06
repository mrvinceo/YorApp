(function () {
  'use strict';

  var forecastioWeather = ['$q', '$resource', '$http', 'a7acef80cf3c70bffc4d8d4107394a46',
    function($q, $resource, $http, a7acef80cf3c70bffc4d8d4107394a46) {
    var url = 'https://api.darksky.net/forecast/' + a7acef80cf3c70bffc4d8d4107394a46 + '/';

    var weatherResource = $resource(url, {
      callback: 'JSON_CALLBACK',
    }, {
      get: {
        method: 'JSONP'
      }
    });

    return {
      //getAtLocation: function(lat, lng) {
      getCurrentWeather: function(lat, lng) {
        return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK&units=si');
      }
    };
  }];

  angular.module('starter.services', ['ngResource'])

  .factory('DataStore', function() {
      //create datastore with default values
      var DataStore = {
          city:       'York',
          latitude:   53.9600,
          longitude:  1.0873 };

      DataStore.setCity = function (value) {
         DataStore.city = value;
      };

      DataStore.setLatitude = function (value) {
         DataStore.longitude = value;
      };

      DataStore.setLongitude = function (value) {
         DataStore.longitude = value;
      };

      return DataStore;
  })
  .factory('Weather', forecastioWeather);
}());
