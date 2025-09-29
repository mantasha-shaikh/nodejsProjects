require("dotenv").config()

const express = require("express")
const app = express()


//getDB
const connectDb = require("./DB/connect")
//router
const authRouter = require('./2routes/routhLogger')
const jobRouter =require('./2routes/routhJobs')


//error_handler
const NotfoundMiddleware = require("./1middleware/notFound")
const errorHandlerMiddleware =require("./1middleware/error_handler")

app.use(express.json())
//extra pakages

//routh
//api/v1/auth/register
//api/v1/auth/login
//api/v1/jobs/:id
app.use('api/v1/auth',authRouter)
app.use('api/v1/jobs',jobRouter)


app.use(NotfoundMiddleware)
app.use(errorHandlerMiddleware

)
const port = process.env.PORT || 5000

const start =async()=>{
try{
    await connectDb(process.env.MONGO_URI)
app.listen(port,()=>{
    console.log(`here is listning ${port}`);
    
})
}catch(err){
console.log(err);

}
}
start()