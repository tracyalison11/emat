.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact-us', {
    templateUrl: 'contact-us/contact-us.html',
    controller: 'contactUsCtrl'
  });
}])

.controller('contactUsCtrl', function($scope) {

});
