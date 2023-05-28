const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    book_name: {type:String,required:true},
    image_url: {type:String,required:true},
    author: String,
    genre: String,
    cost: {type:Number,required:true},
    qty : Number
});

const CartModel = mongoose.model("cart",cartSchema);

module.exports = CartModel;