const mocha = require('mocha')
const expect = require('chai').expect
const request = require('request')
const app = require('../server')

let server;
describe('server' , ()=>{
    before((done)=>{
        server = app.listen(4444 , done)
    })
 
    it('rates should be correct' , (done)=>{
        request('http://localhost:4444/rates' , (err , resp , body)=>{
                let rates = JSON.parse(body)
                expect(rates.fixed).to.equal(50)
                expect(rates.freeMin).to.equal(15)
                done()
            })        
    })

    after(()=>{
        server.close()
    })

})


