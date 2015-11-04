var app = angular.module('myapp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'partials/home.html',
      controller: 'ShoppingCartController'
    })
    .when('/cart', {
      templateUrl:'partials/cart.html',
      controller: 'CartController'
    })
    .otherwise({
      templateUrl:'partials/catch_all.html'
    })
}]);

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});

