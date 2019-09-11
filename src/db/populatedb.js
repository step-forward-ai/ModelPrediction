const mongoose = require('./mongoose')
const Member = require('.././models/member')
const fs = require('fs')
const filename = process.argv[2]

console.log(filename)

//const fileContents = fs.readFileSync('C:\\node-course\\notes-app\\step-forward\\StepForward_CHP10.json', 'utf8')

const fileContents = fs.readFileSync(filename, 'utf8')


var data 

try {
  data = JSON.parse(fileContents)
} catch(err) {
  console.error(err)
}


for(var i=0; i < data.length; i++)  {

    const member = new Member(data[i])

    member.save().then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

}

