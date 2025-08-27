const mongoose = require('mongoose')

const ConnectedDB = async()=>{
    try{
await  mongoose.connect("mongodb+srv://mantasha_kira:<izaan_man>@storeapi.vcxsxvs.mongodb.net/?retryWrites=true&w=majority&appName=StoreApi");
console.log("connected");

    }
    catch(err){
console.log(err);

    }
}
module.exports = ConnectedDB