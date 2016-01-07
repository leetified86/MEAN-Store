// we are requiring a controller file that will do stuff when a route is triggered
// var controller_name = require('./../server/controllers/controller_name.js');
var customers = require('./../server/controllers/customers.js');
var orders = require('./../server/controllers/orders.js');
var products = require('./../server/controllers/products.js');
module.exports = function(app) {
  // these routes are all going to return json 
  // don't want to render/redirect at all we just want to respond with data
  app.get('/', function(req, res){
    res.render('index');
  });

  app.get('/customers', function(req, res){
    customers.show(req,res);
  })
  app.get('/customers/dash', function(req, res){
    customers.show_dash(req,res);
  })
  app.post('/customers/create', function(req, res){
    customers.create(req, res);
  })
  app.post('/customers/delete', function(req, res){
    customers.delete(req, res);
  })
  app.get('/products', function(req,res){
    products.show(req,res);
  })
  app.post('/show_more', function(req ,res){
    products.show_more(req, res);
  })
  app.get('/products/dash',function(req,res){
    products.show_dash(req,res);
  })
  app.post('/products/dash/more', function(req,res){
    products.show_more_dash(req,res)
  })
  app.post('/products/create', function(req,res){
    products.create(req,res);
  })
  app.get('/orders', function(req, res){
    orders.show(req,res);
  })
  app.get('/orders/dash', function(req,res){
    orders.show_dash(req,res);
  })
  app.post('/orders/create', function(req, res){
    orders.create(req,res);
  })
  app.post('/orders/delete', function(req, res){
    orders.delete(req,res);
  })
  
}