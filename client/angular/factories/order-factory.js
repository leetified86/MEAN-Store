miniStore.factory('OrderFactory', function($http){
  var factory = {};
  var orders = [];
  factory.getOrders = function(callback){
    $http.get('/orders').success(function(response){
      orders = response;
      callback(response);
    })
  }
  factory.getDashOrders = function(callback){
    $http.get('/orders/dash').success(function(response){
      orders = response;
      callback(response);
      console.log(orders);
    })
  }
  factory.addOrder = function(order){
    console.log('in the OrderFactory addOrder');
    $http.post('/orders/create', order).success(function(){
      console.log('back in the order factory addOrder funct');
    })
  }
  factory.deleteOrder = function(order){
    console.log('in the factory delete order');
    $http.post('/orders/delete', order).success(function(){
      console.log('back here after deleting order');
    });
  }
  return factory;
})