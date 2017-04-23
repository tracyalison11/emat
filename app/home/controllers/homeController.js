angular.module('home')
.controller('homeController', function($scope) {

  // Carousel Photos Array
  $scope.photos = [
    {path: '/img/carousel-images/image-1.jpg'},
    {path: '/img/carousel-images/image-2.jpg'},
    {path: '/img/carousel-images/image-3.jpg'},
    {path: '/img/carousel-images/image-4.jpg'},
    {path: '/img/carousel-images/image-5.jpg'},
    {path: '/img/carousel-images/image-6.jpg'}
  ];

  // Call Carousel with unique ID
  $('#carousel').carousel();

});
