// use the config method to set up routing:
miniStore.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './angular/partials/dashboard.html'
    })
    .when('/dashboard', {
      templateUrl: './angular/partials/dashboard.html'
    })
    .when('/products', {
      templateUrl: './angular/partials/products.html'
    })    
    .when('/orders', {
      templateUrl: './angular/partials/orders.html'
    })
    .when('/customers', {
      templateUrl: './angular/partials/customers.html'
    })    
    .when('/settings', {
      templateUrl: './angular/partials/settings.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});