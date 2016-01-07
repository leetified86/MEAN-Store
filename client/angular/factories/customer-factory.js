miniStore.factory('CustomerFactory', function($http){
  var factory = {};
  var customers = [];
  factory.getCustomers = function(callback){
    $http.get('/customers').success(function(response){
      customers = response;
      callback(response);
    })
  }
  factory.getDashCustomers = function(callback){
    $http.get('/customers/dash').success(function(response){
      customers = response;
      callback(response);
    })
  }
  factory.addCustomer = function(customer){
    // console.log('in the factory');
    $http.post('/customers/create', customer).success(function(){
      console.log('here')
      // customers.push(customer);
    })
  }
  factory.deleteCustomer = function(customer){
    console.log('in the factory delete customer');
    $http.post('/customers/delete', customer)
  }
  return factory;
})