const Myclass=require("./myClass")
const obj=new Myclass()
var chai=require("chai")
var expect=require("chai").expect
const chaiaspromised=require("chai-as-promised")
chai.use(chaiaspromised)

describe("Test",()=>{
    it("Add two numbers",()=>{
        expect(obj.add(1,2)).to.be.equal(3)
    })
})

describe("Testing the promise",()=>{
    it("Test promise",function(){
//         this.timeout(4000)
//    obj.testPromise().then(function(result){
//     expect(result).to.be.equal(6)
//     done();

return expect(obj.testPromise()).to.eventually.equal(6)


    })
})