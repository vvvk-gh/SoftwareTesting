const express = require('express')
const path = require('path')

const app = express()

app.use('/' , express.static(path.join(__dirname , "/public_static")))

app.post('/calcfare' , (req , res)=>{
    
    let km = pareseFloat(req.body.km)
    let min = parseInt(req.body.min)

    let fare = 50;
   //kms fare
    fare += (km > 5) ? ((km - 5)*10) : 0;
    //time fare
    fare +=  (min > 15) ? ((min - 15)*2) : 0;
    
    res.send({fare : fare})

})

app.listen('4444' , ()=>{
    console.log(`Listening at http://localhost:4444`)
})