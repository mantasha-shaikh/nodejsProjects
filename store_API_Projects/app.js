require('dotenv').config();
// require('express-async-errors')no need any eror in express 5
//async
const connectDb = require('./StoreDB/connectDB')
const express = require('express')
const productsRouter = require('./4route/routes')
const app = express()

const notfound = require('./1middaleware/notfound')
const errorHandlerMiddleware = require('./1middaleware/error_handle')

//middeleware

app.use(express.json())

//rootes
app.get('/',(req,res)=>{
res.status(200).send(`<h1> strore api</h1><a href="/api/v1/products" target="_blank" rel="noopener noreferrer">
  View Cute Store API Docs 🧸
</a>`)


})
//products route
app.use('/api/v1/products',productsRouter)

app.use(notfound)
app.use(errorHandlerMiddleware)

const port =process.env.PORT  || 5000 ;
const start =async()=>{
try{
  //connectDb
  await connectDb(process.env.MONGO_URI)
 
app.listen(port, console.log(`listning here ${port} `))
// app.listen(port,()=>{
//     console.log(`listning here ${port} `);
    
// })


}catch(error){
console.log(error);

}
}

start()