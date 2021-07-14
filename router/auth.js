const express = require('express');
const router = express.Router();

// Getting DataBase Connection
require('../db/connection.js')


// Getting User Schema
const User = require('../model/userSchema.js')

router.get('/' , (req, res)=>{

    res.send("Login")
});




router.post('/login' , async (req ,res)=>{

    console.log("I am Login")

    const {email , password} = req.body;

    if(!email || !password){
        console.log("Please Fill Every Input Field")
        return res.status(400).json({error:"Please Fill Every Input Field"})
    }
    else{
        console.log("Go On")
    }

    
    try{

        const user = new User({email,password})
        const userRegister = await user.save();

        if(userRegister){
            res.status(201).json({message:"User registered Succesfully"});
            console.log("User registered Succesfully");
        }
        

    } catch(err){
        console.log(err);
    }
    

});

module.exports = router;