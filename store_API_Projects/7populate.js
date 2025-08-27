require('dotenv').config()
const products = require('./5model/Proucts_model')
const connectDB = require('./StoreDB/connectDB')
 const jsonProducts = require('./6products.json')

 const start = async()=>{
    try{
await connectDB(process.env.MONGO_URI)
await products.deleteMany()
await products.insertMany(jsonProducts)
console.log('success!!!!');
process.exit(0)//everything is ok
    }catch(error){
        console.log(error);
        process.exit(1)
    }
 }
start()