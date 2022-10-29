const express = require('express')

const app = express()
const port = process.env.PORT || 4000
app.get('/',(req,res)=>{
    res.json({
        "slackUsername": "@Opeyemi", 
        "backend": true, 
        "age": 20, 
        "bio": "I am an aspiring backend developer to be using NodeJs together with my frontend in which I use reactjs. " 
    })
})


app.listen(port,()=>{
    console.log(`coming to port ${port}`)
})