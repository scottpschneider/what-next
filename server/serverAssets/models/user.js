var mongoose = require ('mongoose')
var Schema = mongoose.Schema
var schemaName ="user"

var schema = new Schema({
  userName:{type: String, required: true, unique:true},
  favorites: {type: Array},
  active: {type: Boolean}
})

module.exports = mongoose.model(schemaName, schema)