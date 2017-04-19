var ematApp = angular.module('ematApp', [

//Angular
'ui.router',

//EMAT
 'home',
 // 'about'
])

ematApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: 'partial-home.html',
        controller:'homeController'
      });

      // .state('about', {
      //   url: '/about',
      //   template: 'about-us.html'
      // })
}]);
