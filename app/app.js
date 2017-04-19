var ematApp = angular.module('ematApp', [

//Angular
'ui.router',

//EMAT
 'home',
 'about',
 'services',
 'clients',
 'contact'
])

ematApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'partial-home.html',
      controller:'homeController'
    })

    .state('about', {
      url: '/about',
      template: 'about.html',
      controller: 'aboutController'
    })

    .state('services', {
      url: '/services',
      template: 'services.html',
      controller: 'servicesController'
    })

    .state('clients', {
      url: '/clients',
      template: 'clients.html',
      controller: 'clientsController'
    })

    .state('contact', {
      url: '/contact',
      template: 'contact.html',
      controller: 'contactController'
    })

}]);
