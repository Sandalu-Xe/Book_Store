
import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
    {
        Book_name: {
            type: String, // Missing type definition for name
            required: [true, "Please enter book name"]
        },
        Book_id: {
            type: int,
            required: true,
            default: 0
        },
        author: {
            type:String,
            required: [true, "Please enter Author name"]
        }
    },

    {
        timestamps: true // Corrected "Timestamp" to "timestamps"
    }
);

const book = mongoose.model("Book", BookSchema);
module.exports = book;


