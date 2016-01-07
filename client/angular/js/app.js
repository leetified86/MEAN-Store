// inject the ngRoute dependency in the module
var miniStore = angular.module('miniStore', ['ngRoute']);

angular.module('miniStore').
  filter('fromNow', function() {
    return function(dateString) {
      return moment(dateString).fromNow()
    };
  });