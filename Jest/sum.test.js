const sum = require('./sum')

describe("example testing", () => {

    test("Add two numbers", () => {
        expect(sum(1, 2)).toBe(3);    //Passed
    })

    // test("Object Assignmnet", () => {
    //     expect({}).toBe({});          //Failed
    // })

    test("Object Assignmnet", () => {
        expect({}).toEqual({});          //Passed
    })

})

describe("strings",()=>{
//    test("there is no I in team",()=>{
//     expect("team").toMatch("/I/")       //Failed
//    })

   test("there is no I in team",()=>{
    expect("team").not.toMatch("/I/")   //Passed
   })
})
