var ematApp = angular.module('ematApp', [

//Angular
'ui.router',

//EMAT
 'home',
 'services',
 'clients',
 'contact',

 //Nested Services States
 // 'services.simple-beams',
 // 'services.roark-plates',
 // 'services.miscellaneous',
 // 'services.material-properties'

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

    .state('services.services-list', {
      url: '/services-list',
      parent: 'services',
      templateUrl: 'views/services/services-list.html',
      controller: 'servicesController',
    })

    .state('services.simple-beams', {
      url: '/simple-beams',
      parent: 'services',
      templateUrl: 'views/services/simple-beams.html'
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
