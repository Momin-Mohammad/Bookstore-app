const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    
    book_name: {type:String,required:true},
    image_url: {type:String,required:true},
    author: String,
    genre: String,
    cost: {type:Number,required:true},
});

const bookModel = mongoose.model('book',bookSchema);

module.exports = bookModel