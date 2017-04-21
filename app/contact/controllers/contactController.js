angular.module('contact')

.controller('contactController', function($scope) {

  $scope.data = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
    message: undefined
  };

  $scope.submit = function() {
    console.log($scope.data);
  }

});
