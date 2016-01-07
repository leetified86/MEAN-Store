// create the controller and we're telling it that we are going to use $scope and we are going to use a FriendFactory and that it belongs to the fullMeanDemo app
miniStore.controller('ProductsController', function($scope, ProductFactory) {
  updateProducts();
  
  // gets all of the current friends and saves it in $scope.friends
  function updateProducts() {
    // FriendFactory.getFriends takes a callback function that has the output as a parameter
    ProductFactory.getProducts(function(output) {
      $scope.products = output;
    });
  }
  $scope.getMoreProducts = function(){
    ProductFactory.getMoreProducts($scope.products.length, function(output){
      for(var i = 0; i < output.length; i++){
        if(output[i]){
          $scope.products.push(output[i]);
        }
      }
    })
  }

  $scope.addProduct = function(product) {
    console.log(product);
    ProductFactory.addProduct(product);
    if(!($scope.products.length > 14)){
      $scope.products.push(product);
      $scope.new_product = {}; 
    }
  }

})