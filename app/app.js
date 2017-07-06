var ematApp = angular.module('ematApp', [

//Angular
'ui.router',

//EMAT
 'home',
 'services',
 'clients',
 'contact',
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
      abstract: true,
      templateUrl: 'views/services/services.html',
    })

    // Services Child States
    .state('services.services-list', {
      url: '/list',
      parent: 'services',
      templateUrl: 'views/services/services-list.html',
      controller: 'servicesController',
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

  // Manage active class on navbar
  $(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
  });

}]);
