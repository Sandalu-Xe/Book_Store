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
      
      //  const book = await Book.create(req.body);

      const { Book_name, Book_id, author } = req.body;
      const newbook = new Book({ Book_name,Book_id, author});
      const savedbook = await newbook.save();
      res.status(200).json(savedbook) 
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  //get all book from mongodb 

  app.get('/api/books', async (req, res) => {
    try {
        // Retrieve all products from the database
        const book = await Book.find({}); // Find all products

        // Respond with the list of products
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//FIND book from mongodb by using id 

app.get('/api/book/:id', async (req, res) => {
    const { id } = req.params; // Get the ID from the request parameters
    try {
        const book = await Book.findById(id); // Find the product by ID
        if (!book) {
            return res.status(404).json({ message: 'book not found' }); // Return 404 if not found
        }
        res.status(200).json(book); // Return the found product
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle any errors
    }
});

//upadate the book by id

app.put('/api/book/:id', async (req, res) => {
    try {
        const { id } = req.params;//.Get the ID from the request parameters

        const book = await Book.findByIdAndUpdate(id, req.body);

        if (!book) {
            return res.status(404).json({ message: "book not found" });
        }

        const updatedbook = await Book.findById(id);
        res.status(200).json(updatedbook);// Return the updated product

    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle any errors
    }
});

// DELETE route to delete a book by ID
app.delete('/api/book/:id', async (req, res) => {

    const { id } = req.params; 
    try {
        const deletedbook = await Book.findByIdAndDelete(id); // Find and delete the product by ID
        if (!deletedbook) {
            return res.status(404).json({ message: 'book not found' }); // Return 404 if product is not found
        }
        res.status(200).json({ message: 'book deleted successfully' }); // Return success message
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle any errors
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

