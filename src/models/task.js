const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        required: true,
        type: String,
        trim: true,
        minlength: 6,
        validate(value) {
             if (value.toLowerCase().includes('password')) {
                 throw new Error("Password cannot include 'password'")
             }

             if (value.length < 6) {
                throw new Error("Password length < 6")
             }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    married: {
        type: Boolean,
        required: false,
        default: false
    },
    email: {
        type : String,
        required: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }

})

module.exports = User
