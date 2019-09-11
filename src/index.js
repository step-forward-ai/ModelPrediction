const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
var env = process.env.NODE_ENV || 'dev';
var config = require('./db/config')[env];
const Member = require('./models/member')

const app = express()

const port = config.server.port

app.use(express.json())

app.get('/mcid/:id', (req, res)=>{
    const _id = req.params.id
    Member.findById(_id).then((member)=>{
        if (!member) {
            return res.status(404).send()
        }
        res.send(member)
    }).catch((e)=>{
        return res.status(500).send()
    })
})


app.post('/mcid', (req, res)=>{
    
    const member = new Member(req.body)

    member.save().then((result)=>{
        res.status(201).send(member)
    }).catch((error)=>{
        res.status(400).send(error)
    })
})

app.post('/users', (req, res)=>{
    
    const user = new User(req.body)

    user.save().then((result)=>{
        res.status(201).send(user)
    }).catch((error)=>{
        res.status(400).send(error)
    })
})

app.get('/users', (req, res)=>{
    User.find({}).then((users)=>{
        res.status(200).send(users)
    }).catch((e)=>{
        res.status(500).send()
    })
})

app.get('/users/:id', (req, res)=>{
    const _id = req.params.id
    User.findById(_id).then((user)=>{
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e)=>{
        return res.status(500).send()
    })
})

app.listen(port, ()=>{
    console.log('App is started, listening at port:' + port)
})