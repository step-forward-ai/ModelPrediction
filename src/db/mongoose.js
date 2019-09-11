const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const me = new User({
//     name: '    george   ',
//     email: 'Mke@yahoo.com   ',
//     password: "                                  twang@passrword"
// })

// me.save().then((result)=>{
//     console.log(result)
//     mongoose.disconnect()
// }).catch((error)=>{
//     console.log(error)
//     mongoose.disconnect()
// })
