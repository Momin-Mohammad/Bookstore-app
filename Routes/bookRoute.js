const {Router} = require("express");
const bookModel = require("../Models/BookModel");
const BookRouter = Router();

BookRouter.get("/",async(req,res)=>{
    const books = await bookModel.find();
    try{
    if(books.length > 0){
        res.send({msg:"Display all books",data:books});
    }else{
        res.send({msg:"No books found"});
    }
}catch(e){
    res.send({msg:e})
}
})

BookRouter.post("/addBook",async(req,res)=>{
    const {book_name,author,genre,cost,image_url} = req.body;
    try{
    const bookExist = await bookModel.find({book_name});
    if(bookExist.length > 0){
        res.send({msg:"Book already exist"})
    }else{
        const addBook = await new bookModel({book_name,author,genre,cost,image_url});
        await addBook.save();
        res.send({msg:"Book Added",data:addBook});
    }
}catch(e){
    res.send({msg:e})
}
})

BookRouter.post("/:book",async(req,res)=>{
    const book = req.params.book
    try{
        const bookDetails = await bookModel.find({book_name:book});
        res.send({data:bookDetails});
}catch(e){
    res.send({msg:e})
}
})

BookRouter.post("/addBook",async(req,res)=>{
    const {book_name,author,genre,cost,image_url} = req.body;
    try{
    const bookExist = await bookModel.find({book_name});
    if(bookExist.length > 0){
        res.send({msg:"Book already exist"})
    }else{
        const addBook = await new bookModel({book_name,author,genre,cost,image_url});
        await addBook.save();
        res.send({msg:"Book Added",data:addBook});
    }
}catch(e){
    res.send({msg:e})
}
})

BookRouter.get("/:sortBy/:filterBy",async(req,res)=>{
    const sort = req.params.sortBy;
    const filter = req.params.filterBy;
    try{
        if(sort === "sort" && filter==="filter"){
        const bookDetails = await bookModel.find();
        res.send({data:bookDetails});
        }else if(sort === "sort" && filter !== "filter"){
        const bookDetails = await bookModel.find({genre:filter});
        res.send({data:bookDetails});
        }else if(sort !== "sort" && filter === "filter"){
            const bookDetails = await bookModel.find().sort({cost:sort==="asc"?1:-1});
        res.send({data:bookDetails});
        }else{
            const bookDetails = await bookModel.find({genre:filter}).sort({cost:sort==="asc"?1:-1});
            res.send({data:bookDetails});
        }
}catch(e){
    res.send({msg:e})
}
})

module.exports = BookRouter;