require('dotenv').config();
//async
const connectDb = require('./StoreDB/connectDB')
const express = require('express')

const app = express()

const NotFound = require('../Nodejs_projects/5middleware/notFound')
const err_handle = require('../Nodejs_projects/5middleware/error-handler')

//middeleware

app.use(express.json())

//rootes
app.get('/',(req,res)=>{
res.status(200).send(`<h1> strore api</h1><a href="/api/v1/products" target="_blank" rel="noopener noreferrer">
  View Cute Store API Docs 🧸
</a>`)


})
//products route


app.use(NotFound)
app.use(err_handle)

const port =process.env.PORT  || 5000 ;
const start =async()=>{
try{
  await connectDb();
app.listen(port, console.log(`listning here ${port} `))
// app.listen(port,()=>{
//     console.log(`listning here ${port} `);
    
// })

//connectDb
}catch(error){
console.log(error);

}
}

start()