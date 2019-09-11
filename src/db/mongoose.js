const mongoose = require("mongoose")

var env = process.env.NODE_ENV || 'dev';
var config = require('./config')[env];

// const connectionURL = "mongodb://" + config.database.host + ":" + config.database.port + "/" + config.database.db

console.log("I am here")
const url = config.database.urlConnection
console.log("ending here")
console.log(url)

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
})
