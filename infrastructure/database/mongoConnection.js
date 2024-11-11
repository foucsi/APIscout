const mongoose = require("mongoose");
const connectionString = process.env.CONNECTION_STRING;

//connection to the database

const connect = async()=>{
    await mongoose.connect(connectionString, {connectTimeoutMS: 2000});
    console.log("Successfully connected to the database: APIscout");
}

const connectDb = async ()=>{
    try{
        console.log("Connection progress...")
        setTimeout(connect, 1000)
    }catch(error){
        console.error("Database connection failed. Retrying in 5 seconds...", error);
        setTimeout(connectDb, 5000);
    }
}
connectDb();