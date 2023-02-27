const express=require('express')
const app=express()
app.use(express.json())

app.get("/users",(req,res)=>{
    res.status(200).json({
        users:[
            {
                name:'qwer',
                password:'qwerrrrrrrrrr'
            }
        ]
    })
})
app.listen(3000)

// fastify.listen({port:3000},(err, address) => {
//     if (err) throw err
//     console.log(`Server is now listening on ${address}`); 
// })

module.exports=app