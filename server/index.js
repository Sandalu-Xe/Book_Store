const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Book = require("./Models/Bookmodel.js")


const app =express();

//middleware 
app.use(express.json());

app.get('/', async (req, res) => {
    res.send(" hello serever is ready to paly");
})

//save book on the database 

app.post('/api/book', async (req, res) => {
    try {
      
      //  const Product = await Product.create(req.body);

      const { Book_name, Book_id, author } = req.body;
      const newbook = new Book({ Book_name,Book_id, author});
      const savedbook = await newbook.save();
      res.status(200).json(savedbook) 
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

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

