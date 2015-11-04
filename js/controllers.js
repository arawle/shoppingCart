var app = angular.module('myapp');

app.controller('ShoppingCartController', ['$scope', 'TeaDataFactory', 'ShoppingCart', function($scope, TeaDataFactory, ShoppingCart){
  $scope.teaData = TeaDataFactory;
  $scope.totalItems
  $scope.cart = {}

  $scope.add = function(tea){
    ShoppingCart.addTea(tea);
  };

  $scope.totalItemCount = function(){
    $scope.totalItems = ShoppingCart.numberOfItems()
  };

}]);

app.controller('CartController', ['$scope', 'ShoppingCart', function($scope, ShoppingCart) {
  $scope.cart  = ShoppingCart.cartContents
  $scope.total = ShoppingCart.total()

  $scope.updateSubtotal = function(tea){
   $scope.tea.subtotal = ShoppingCart.subtotal(tea.quantity, tea.price);
  };

  $scope.updateQuantity = function(tea){
    console.log(tea)
    ShoppingCart.changeQuantity(tea)
    $scope.total = ShoppingCart.total()
  };

}]);
