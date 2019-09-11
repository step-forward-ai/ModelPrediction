const mongoose = require('mongoose')

var schema = mongoose.Schema(
    {
        _id: {
            type: String
        },
     
        firstName: {
            type: String,       
            trim: true
        },
       
        lastName: {
            type: String,       
            trim: true
        },
    
        gender: {
            type: String,       
        },
    
        dateOfBirth: {
            type: Date,       
        },
        
        zipcode: {
            type: String,       
        },
        
        conditions: [{
                _id: String,
                title: String,
                desc: String,
                score: Number,
                ranking: Number,
                percentile: Number
        }]
        
    }, 
    { versionKey: false }
)

const Member = mongoose.model('Member', schema)

module.exports = Member
