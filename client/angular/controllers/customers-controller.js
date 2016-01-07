// create the controller and we're telling it that we are going to use $scope and we are going to use a FriendFactory and that it belongs to the fullMeanDemo app
miniStore.controller('CustomersController', function($scope, CustomerFactory) {
  updateCustomers();
  $scope.uniqueUser = true;

  // gets all of the current friends and saves it in $scope.friends
  function updateCustomers() {
    // FriendFactory.getFriends takes a callback function that has the output as a parameter
    CustomerFactory.getCustomers(function(output) {
      $scope.customers = output;
    });
  }
  $scope.addCustomer = function(customer) {
    customer.created_at = new Date();
    for(var i = 0; i < $scope.customers.length; i++){
      // console.log('here');
      if($scope.customers[i].name == customer.name){
        $scope.uniqueUser = false;
        return;
      }
    }
    if($scope.uniqueUser == true){
      CustomerFactory.addCustomer(customer);
      $scope.customers.push(customer);
      $scope.uniqueUser == false;
    }
  }
  $scope.deleteCustomer = function(customer){
    console.log('in the delete customer method');
    CustomerFactory.deleteCustomer(customer);
    $scope.customers.splice($scope.customers.indexOf(customer), 1);
  }
})