const mongoose = require('mongoose')

const ConnectedDB = async(url)=>{
    try{
await  mongoose.connect(url);
console.log("connected");

    }
    catch(err){
console.log(err);

    }
}
module.exports = ConnectedDB