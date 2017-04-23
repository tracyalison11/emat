var ematApp = angular.module('ematApp', [

//Angular
'ui.router',

//EMAT
 'home',
 'services',
 'clients',
 'contact'
])

ematApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller:'homeController'
    })

    .state('services', {
      url: '/services',
      templateUrl: 'views/services.html',
      controller: 'servicesController'
    })

    .state('clients', {
      url: '/clients',
      templateUrl: 'views/clients.html',
      controller: 'clientsController'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'contactController'
    })

}]);
