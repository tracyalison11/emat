var ematApp = angular.module('myApp', ['ui.router']);

ematApp.config(function($stateProvider), $urlRouteProvider) {

  $urlRouterProvider.otherwise('/home');

}

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
