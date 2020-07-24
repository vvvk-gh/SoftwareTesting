const mocha = require('mocha')
const chai = require('chai')
const fareutils = require('../fareutils')
//visit : https://www.chaijs.com/ for better understanding of below
const expect = chai.expect

//visit : https://mochajs.org/ for better understanding
describe ('fareutils', ()=>{
    it(`expected fare 50 for 15 min and  5km ` , ()=>{
        let fare = fareutils.calcfare(5,15)
        expect(fare).to.equal(50)
    })

})

