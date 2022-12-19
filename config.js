var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
let connection;
let db;


const { MongoClient } = require("mongodb")

async function connectDb(){
  connection = await MongoClient.connect("mongodb://127.0.0.1:27017");
  db = connection.db("zomato_clone");
  return db;
}

async function closeConnection(){
    if(connectDb){
        await connection.close();
    }else{
        console.log("No Connection")
    }
}


module.exports = { connectDb ,db, connection, closeConnection };
