require("dotenv").config()

const express = require("express")
const app = express()
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')


//getDB
const connectDb = require("./DB/connect")
const auth = require("./1middleware/authentication")
//router
const authRouter = require('./2routes/routhLogger')
const jobRouter =require('./2routes/routhJobs')



//error_handler
const NotfoundMiddleware = require("./1middleware/notFound")
const errorHandlerMiddleware =require("./1middleware/error_handler")

app.set('trust proxy',1)
const limiter = rateLimiter({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
})

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())
app.use(limiter)
//extra pakages

//routh
//api/v1/auth/register
//api/v1/auth/login
//api/v1/jobs/:id
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',auth,jobRouter)


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