// create the controller and we're telling it that we are going to use $scope and we are going to use a FriendFactory and that it belongs to the fullMeanDemo app
miniStore.controller('DashboardController', function($scope, ProductFactory, OrderFactory, CustomerFactory) {
  getDashProducts();
  getDashOrders();
  getDashCustomers();

  function getDashProducts(){
    ProductFactory.getDashProducts(function(response){
      $scope.products = response;
    })
  }
  function getDashOrders(){
    OrderFactory.getDashOrders(function(response){
      $scope.orders = response;
    })
  }
  function getDashCustomers(){
    CustomerFactory.getDashCustomers(function(response){
      $scope.customers = response;
    })
  }
  $scope.allCustomers = function(){
    CustomerFactory.getCustomers(function(response){
      $scope.customers = response;
    })
  }

  $scope.allOrders = function(){
    OrderFactory.getOrders(function(response){
      $scope.orders = response;
    })
  }

  $scope.getMoreProducts = function(){
    ProductFactory.getMoreDash($scope.products.length,function(response){
      for(var i = 0; i < response.length; i++){
        if(response[i]){
          $scope.products.push(response[i]);
        }
      }
    })
  }
})