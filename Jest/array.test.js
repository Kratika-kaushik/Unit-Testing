const clonearray=require('./array')

describe("Testing array",()=>{
    // test("properly clones array",()=>{
    //     const value=[1,2,3,4,5]
    //     expect(clonearray(value)).toBe(value);   //Failed
    // })

    test("properly clones array",()=>{
        const value=[1,2,3,4,5]
        expect(clonearray(value)).toEqual(value);  //Passed
    })
})