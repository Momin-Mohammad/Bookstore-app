const {Router} = require("express");
const bookModel = require("../Models/BookModel");
const CartModel = require("../Models/CartModel");
const CartRouter = Router();

CartRouter.get("/",async(req,res)=>{
    const cartItems = await CartModel.find();

    try{
        if(cartItems.length > 0){
            var sum = 0;
            for(var a=0; a<cartItems.length; a++){
                sum += cartItems[a].cost * cartItems[a].qty
            }
            res.send({data:cartItems,total:sum})
        }else{
            res.send({msg:"Cart is Empty!"}) 
        }
    }catch(e){
        res.send({msg:e})
    }
   
});; 

CartRouter.post("/addToCart/:book",async(req,res)=>{
    const book = req.params.book
    try{
        const bookDetails = await bookModel.find({book_name:book});
        const theBook = {
    book_name: bookDetails[0].book_name,
    image_url: bookDetails[0].image_url,
    author: bookDetails[0].author,
    genre: bookDetails[0].genre,
    cost: bookDetails[0].cost,
    qty : 1
        }
        const addBookToCart = await new CartModel(theBook);
        await addBookToCart.save();
        res.send({msg:"Book Added to cart",book_added_to_cart:addBookToCart});
}catch(e){
    res.send({msg:`Error : ${e}`});
}
})

CartRouter.post("/updateQty/:book",async(req,res)=>{
    const book = req.params.book;
    const updateBy = req.body;
    try{
        const updatedBook = await CartModel.findOneAndUpdate({book_name:book},{qty:updateBy.amount});
        res.send({msg:"Updated quantity",data:updatedBook})
    }catch(e){
        res.send({msg:`Error : ${e}`});
    }
})

CartRouter.post("/removeFromCart/:book",async(req,res)=>{
    const book = req.params.book
    try{
        const removeFromCart = await CartModel.findOneAndDelete({book_name:book});
        res.send({msg:"Book Removed from cart",book_removed_from_cart:removeFromCart});
}catch(e){
    res.send({msg:`Error : ${e}`})
}
})

module.exports = CartRouter;