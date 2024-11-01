const mongoose = require("mongoose");
const connectionString = process.env.CONNECTION_STRING;

//connection to the database

const connectDb = async ()=>{
    try{
        await mongoose.connect(connectionString, {connectTimeoutMS: 2000});
        console.log("Successfully connected to the database: APIscout");
    }catch(error){
        console.error("Database connection failed. Retrying in 5 seconds...", error);
        setTimeout(connectDb, 5000);
    }
}
connectDb();