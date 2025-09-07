require('dotenv').config()
const express = require('express')
const app = express()
const errorHandlerMiddleware = require('./1middeleware/error_handlers')
const notfound = require('./1middeleware/not_found')

const mainrouters = require('./4controlers/task_controls')
app.use(express.json())
app.use(express.static('./3public'))
app.use('/api/v1',mainrouters)//common route 





// //outes
// app.get('/',(req,res)=>{
//     res.send('hello world')
//     res.end()
// })



app.use(notfound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT||5000;

const start = async()=>{
    try{
app.listen(port,()=>{
    console.log(`listning here ${port}`);
    
})

    }catch(err){
console.log(err);

    }
}
start()
