
const mongoose = require('mongoose')
// const connectionString =
// "mongodb+srv://mantasha2513604:XEweknV2gtBRDo0R@backend2.h8yjucs.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backend2"
//.env mai rakah chahe tho app.js ya alg folder ya env file likho

const connectDB =(url)=>{
return mongoose.connect(url)
//   .then(() => {
//     console.log("Connected to DB");
//   })
//   .catch((err) => {
//     console.log("Error here: " + err);
//   });
}

module.exports = connectDB




