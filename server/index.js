import express  from "express";
import mongoose  from "mongoose";
const app =express();

// import dotenv from "dotenv";

// dotenv.config();

app.get('/', async (req, res) => {
    res.send(" hello serever is ready to paly");
})

mongoose.connect('mongodb+srv://user1:Thush12213@cluster0.9qwykfs.mongodb.net/BookStrore?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("connected to the database sandalu 🚀🚀🚀🚀");

    app.listen(3333,()=>{
        console.log("server is running on port 3333");
    
    });
})
.catch((err)=>{
    console.log("connection is faild",err);
});

console.log("hello there")