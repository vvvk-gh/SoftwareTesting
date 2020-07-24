const mocha = require('mocha')
const chai = require('chai')
const fareutils = require('../fareutils')
//visit : https://www.chaijs.com/ for better understanding of below
const expect = chai.expect

//visit : https://mochajs.org/ for better understanding
describe ('fareutils', ()=>{
    it(`expected fare 50 for 0 Km and  0 Min ` , ()=>{
        let fare = fareutils.calcfare(5,15)
        expect(fare).to.equal(50)
    })

    it(`expected fare 110 for 10 Km and  20 Min ` , ()=>{
        let fare = fareutils.calcfare(10,20)
        expect(fare).to.equal(110)
    })

})

