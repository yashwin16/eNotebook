const express=require('express');
const User = require('../models/User');
const router=express.Router();
const {body,validationResult}=require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

//Route 1:create user
router.post('/createuser',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid mail').isEmail(),
    body('password','Enter a valid password').isLength({min:5}),
],async (req,res)=>{
    let success=false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success,errors:errors.array()});
    }
    try{
        let user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).json({success,error:"Sorry a user with this email already exists"})
        }
    const salt = await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password,salt);
    user= await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPass
    })
    const data={
        user:{
            id:user.id
        }
    }
    const authToken = jwt.sign(data,process.env.JWT_SECRET);
    success=true
    return res.json({success,authToken});
        }catch(error){
            console.error(error.message);
            res.status(500).json({ success: false, error: "Internal Server Error" })
        }
})

//Route 2:Login
router.post('/login',[
    body('email','Enter a valid mail').isEmail(),
    body('password','Password cannot be blank').exists(),
],async (req,res)=>{
    let success=false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            success=false
            return res.status(400).json({success,error:"Please try to login with correct credentials"});
        }
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            success=false
            return res.status(400).json({success,error:"Please try to login with correct credentials"});
        }
        const data={
            user:{
            id:user.id
        }
    }
    const authToken = jwt.sign(data,process.env.JWT_SECRET);
        success=true;
    res.json({success,authToken});
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

//Route 3:Get logged in user details
router.post('/getuser',fetchuser,async (req,res)=>{
    try {
        userId=req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

module.exports=router;