const express = require("express");
const app = express();
const connection = require("./Configs/db.js");
const UserRouter = require("./Routes/userRoute.js");
const BookRouter = require("./Routes/bookRoute.js");
const CartRouter = require("./Routes/cartRoute.js");
require('dotenv').config();
app.use(express.json());


app.use("/user",UserRouter);
app.use("/books",BookRouter);
app.use("/cart",CartRouter);

app.get('/',(req,res)=>{
    res.send("Server is running")
})
app.listen(process.env.port,async()=>{
    try{
        connection;
        console.log("Connected to DB");
    }catch(e){
        console.log(e)
    }
    console.log("Server is running at port",process.env.PORT)
})

