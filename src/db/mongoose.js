const mongoose = require("mongoose")

var env = process.env.NODE_ENV || 'dev';
var config = require('./config')[env];

const connectionURL = "mongodb://" + config.database.host + ":" + config.database.port + "/" + config.database.db

console.log(connectionURL)

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true
})
