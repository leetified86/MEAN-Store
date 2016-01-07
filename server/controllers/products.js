// make an immediate function that gives back an object that has methods that handle our requests
// require mongoose so that we can access the model
var mongoose = require('mongoose');
// this allows us access the model/collection in the DB
var Product = mongoose.model('Product');
module.exports = (function(){
  // return because we want to put an object into the variable for whatever requires this
  return {
    show: function(req, res){
      console.log('in the model show method');
      Product.find({}).limit(15).exec(function(err, results){
        if(err){
          console.log(err);
        } else {
          // console.log('here');
          // console.log(res);
          res.send(JSON.stringify(results));      
        }
      })
    },
    show_more: function(req, res){
      console.log('in the show more method');
      console.log(req.body.skip);
      Product.find({}).skip(req.body.skip).limit(15).exec(function(err, results){
        if(err){
          console.log('error getting more message');
        } else {
          res.send(JSON.stringify(results));
          // console.log(results);
        }
      })
    },
    show_dash: function(req, res){
      Product.find({}).limit(5).exec(function(err,results){
        if(err){
          console.log('error getting dashboard products');
        } else {
          res.send(JSON.stringify(results));
        }
      })
    },
    show_more_dash: function(req, res){
      Product.find({}).skip(req.body.skip).limit(5).exec(function(err, results){
        if(err){
          console.log('error getting more dashboard products');
        } else {
          res.send(JSON.stringify(results));
        }
      })
    },
    create: function(req, res){
      console.log('in the product create method');
      var product = new Product(req.body);
      console.log(req.body);
      product.save(function(err, result){
        if(err){
          console.log(err);
        } else {
          console.log('successfully added new product!');
        }
      })
    }
  }
})();