const express = require('express')
const path = require('path')
const fareutils = require('./fareutils')
const app = express()

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use('/' , express.static(path.join(__dirname , "/public_static")))

app.post('/calcfare', (req , res)=>{
    
    let km = parseFloat(req.body.km)
    let min = parseInt(req.body.min)

    let fare = fareutils.calcfare(km, min) 
    res.send({fare : fare})
})


app.get('/rates' , (req , res) =>{
    res.send(fareutils.rate)
})

app.listen('4444' , ()=>{
    console.log(`Listening at http://localhost:4444`)
})