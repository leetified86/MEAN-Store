// create the controller and we're telling it that we are going to use $scope and we are going to use a FriendFactory and that it belongs to the fullMeanDemo app
miniStore.controller('OrdersController', function($scope, CustomerFactory, OrderFactory, ProductFactory) {
  updateOrders();
  updateProducts();
  updateCustomers();
  function updateCustomers(){
    CustomerFactory.getCustomers(function(response){
      $scope.customers = response;
    })
  }
  function updateOrders(){
    OrderFactory.getOrders(function(response){
      $scope.orders = response;
    });
  }
  function updateProducts(){
    ProductFactory.getProducts(function(response){
      $scope.products = response;
    })
  }
  $scope.addOrder = function(order){
    order.product = order.product.name;
    order.created_at = new Date();
    // console.log(order);
    OrderFactory.addOrder(order);
    $scope.orders.push(order);
  }
  $scope.deleteOrder = function(order){
    OrderFactory.deleteOrder(order);
    $scope.orders.splice($scope.orders.indexOf(order), 1);
    console.log('updating orders');
  }
})