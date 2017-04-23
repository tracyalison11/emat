angular.module('clients')
.directive('ematClient', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/client-info.html',
    scope: {
      client: '='
    }
  }
});
