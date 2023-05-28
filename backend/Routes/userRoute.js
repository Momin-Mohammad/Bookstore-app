const {Router} = require("express");
const userModel = require("../Models/UserModel");

const UserRouter = Router();

UserRouter.get("/",(req,res)=>{
    res.send("Users Requested")
})

UserRouter.post("/reg",async(req,res)=>{
    const {name,email,password} = req.body;
  try{  
    const userExist = await userModel.find({email});
    if(userExist.length > 0){
        res.send({msg:"User already registered, please login"});
    }else{
        const user = new userModel({name,email,password});
     await user.save();
    res.send({msg:"User registered Successfully",data:user})
    }
}catch(e){
    res.send({msg:e})
}
})

UserRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body;
  try{  
    const user = await userModel.find({email});

    if(user.length > 0){
        if(user[0].password === password){
            res.send({msg:"Login Successfull",data:user});
        }else{
            res.send({msg:"Wrong Password"})
        }
    }else{
        res.send({msg:"Email Address not found. Please SignUp"})
    }
}catch(e){
    res.send({msg:e})
}
})

module.exports = UserRouter;