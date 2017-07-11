angular.module('contact')
.controller('contactController', function($scope) {
console.log("gizmo");
  $scope.data = {
    fullName: undefined,
    email: undefined,
    phone: undefined,
    message: undefined,
  };

  $scope.noEmailProvided = undefined;
  $scope.emailSent = undefined;
  $scope.stateText = 'Send';

  // parameters: service_id, template_id, template_parameters
  $scope.submit = function() {
    if (!$scope.data.email) {
      $scope.noEmailProvided = true;
      return;
    }

    $scope.stateText = 'Sending';

    emailjs.send("smtp_server","contactus", {
      fullName: $scope.data.fullName,
      email: $scope.data.email,
      phone: $scope.data.phone,
      message: $scope.data.message
    })
    .then(function(response) {
      $scope.$evalAsync(function () {
        $scope.emailSent = true;
        $scope.stateText = 'Sent';
      });

       console.log("SUCCESS. status=%d, text=%s", response.status, response.text, $scope.stateText);
    }, function(err) {
       console.log("FAILED. error=", err);
    });
  }

});
