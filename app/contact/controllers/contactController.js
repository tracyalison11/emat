angular.module('contact')

.controller('contactController', function($scope) {

  $scope.data = {
    fullName: undefined,
    email: undefined,
    phone: undefined,
    message: undefined
  };

  // parameters: service_id, template_id, template_parameters


  $scope.submit = function() {
    console.log($scope.data);

    emailjs.send("smtp_server","contactus", {
      fullName: $scope.data.fullName,
      email: $scope.data.email,
      phone: $scope.data.phone,
      message: $scope.data.message
    })
    .then(function(response) {
       console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    }, function(err) {
       console.log("FAILED. error=", err);
    });
  }

});
