angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

//Weather API function using DarkSky API.
(function () {
  'use strict';
  var apiKey = "a7acef80cf3c70bffc4d8d4107394a46";
  var forecastDarkSky = ['$q', '$resource', '$http', 'apiKey',
    function($q, $resource, $http, apiKey) {
    var url = 'https://api.darksky.net/forecast/' + apiKey + '/';

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
          city:       'Portumna',
          latitude:   53.0905,
          longitude:  -8.2337 };

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
  .factory('Weather', forecastDarkSky);
}());
