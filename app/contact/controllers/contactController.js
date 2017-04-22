angular.module('contact')

.controller('contactController', function($scope) {

  $scope.data = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
    message: undefined
  };

  // Email.send("from@you.com",
  // "to@them.com",
  // "This is a subject",
  // "this is the body",
  // "smtp.yourisp.com",
  // "username",
  // "password");

  $scope.submit = function() {
    console.log($scope.data);
  }

});
