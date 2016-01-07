miniStore.factory('ProductFactory', function($http){
  var factory = {};
  var products = [];
  factory.getProducts = function(callback){
    $http.get('/products').success(function(response){
      products = response;
      console.log(products);
      callback(response);
    })
  }
  factory.getMoreProducts = function(skip, callback){
    $http.post('/show_more', {skip: skip}).success(function(response){
      console.log(response);
      callback(response);
    })
  }
  factory.getDashProducts = function(callback){
    $http.get('/products/dash').success(function(response){
      products = response;
      // console.log(products);
      callback(response);
    })
  }
  factory.getMoreDash = function(skip, callback){
    $http.post('/products/dash/more', {skip: skip}).success(function(response){
      callback(response);
    })
  }
  factory.addProduct = function(product){
    $http.post('/products/create', product).success(function(response){
      console.log('back in the product factory!');
    })
  }
  return factory;
})