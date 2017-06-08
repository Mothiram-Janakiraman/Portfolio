// MODULE
var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

// ROUTES
portfolioApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/aboutus', {
        templateUrl: 'pages/aboutus.html',
        controller: 'aboutusController'
    })
    .when('/portfolio', {
        templateUrl: 'pages/portfolio.html',
        controller: 'portfolioController'
    })
    .when('/skills', {
        templateUrl: 'pages/skills.html',
        controller: 'skillsController'
    })
    .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'contactController'
    })
   
    
});


// CONTROLLERS

portfolioApp.controller('homeController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Home';
    
}]);

portfolioApp.controller('aboutusController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'About Us';
    
}]);

portfolioApp.controller('portfolioController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Portfolio';
    $scope.webimages = [
        "dayandnight.jpg",
        "kodaithiruvuzah.jpg",
        "parthmartimonial.jpg",
        "pizzaria.jpg"
    ]
    $scope.brandings = [
        "brand2.jpg",
        "brand3.jpg",
        "brand6.jpg",
        "brand7.jpg",
        "brand8.jpg"
    ]
    $scope.conceptdesign = [
        "concept2.jpg",
        "concept5.jpg",
        "concept7.jpg",
        "concept8.jpg",
        "concept9.jpg"
    ]
    
}]);

portfolioApp.controller('skillsController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Skills';
    
}]);

portfolioApp.controller('contactController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'contact';
    
}]);


// DIRECTIVES

portfolioApp.directive('colorbox', function() {
  return {   
    restrict: 'AC',    
    link: function (scope, element, attrs) {
      $(element).colorbox(attrs.colorbox);     
    }
  };  
});

someApp.directive('isActiveNav', [ '$location', function($location) {
return {
 restrict: 'A',
 link: function(scope, element) {
   scope.location = $location;
   scope.$watch('location.path()', function(currentPath) {
     if('/#' + currentPath === element[0].attributes['href'].nodeValue) {
       element.parent().addClass('active');
     } else {
       element.parent().removeClass('active');
     }
   });
 }
 };
}]);


