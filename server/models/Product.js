// we want to create a file that has the schema for our customers

var mongoose = require('mongoose');

// create a schema for our customers
var ProductSchema = new mongoose.Schema({
  name: String,
  url: String,
  description: String,
  quantity: Number
})

// create the model using that schema
// console.log("just created the model")
mongoose.model('Product', ProductSchema)