const mongoose = require('mongoose');
require("dotenv").config({ path: __dirname + "/.env" });
const mongoURI = process.env.MONGO_URL;

const connectToMongo = async ()=>{
    try{
        await mongoose.connect(mongoURI);
        console.log("Connected to Mongo successfully");
    }catch(error){
        console.log('MongoDB connection failed:',error.message);
        process.exit(1);
    }
}

module.exports = connectToMongo;