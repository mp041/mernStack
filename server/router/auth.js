const e = require('express');
const express = require('express');
var app = express()

const router = express.Router();
const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/Authenticate");



const User = require('../model/userSchema');
require('../DB/conn')

router.get('/',(req,res) => {
    res.send('server connected at router');
});


router.post('/register',async (req,res) => {
    const {name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        res.status(422).json({error : "PLEASE FILL THE DATA"})
    }
    try{
        const userExist = await User.findOne({email : email});
        if(userExist) {
            return res.status(422).json({error : "EMAIL IS ALREADY EXIST"})
        }else if(password != cpassword){
            return res.status(422).json({error:"Password is not matching"})
        }else{
            const user = new User({name,email,phone,work,password,cpassword});
            await user.save();

            res.status(201).json({message : "User Created Successfully"})
        }

        
    }catch(err){ 
        console.log(err);
    }
});
router.post('/signin',async (req,res) => {
    try{
        const { email , password } = req.body;

        if(!email || !password){
            return res.status(422).json({error : "Please fill the data"})
        }

        const userLogin = await User.findOne({email:email})
        console.log(userLogin);

        
        if(userLogin){
            const passmatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now() + 2592000000 ),
                httpOnly:true
            });
    

                if(!passmatch){
                    res.status(400).json({error:"Invalid Credential"})
                } else {
                    res.status(200).json({message:"successfully login"})
               }
        }else{
            res.status(400).json({error:"invalid credential"})
        }
        

    }catch(err){
        console.log(err);
    }
});

router.get('/about', authenticate,(req,res) => {
    // console.log("About Page");
    res.send(req.rootUser);
});

router.get('/getdata',authenticate,(req,res) => {
    res.send(req.rootUser);
});

router.post('/contact',authenticate,async(req,res) => {
    try {
      
            const { name,email,phone,message } = req.body;
            console.log(req.body);
            if(!name || !email || !phone || !message){ 
                return res.status(400).json({error:"plzz fill the form"});
            }


        console.log("before");
        const userContact = await User.findOne({_id:req.userID});
        console.log("after");
        if(userContact){

            const userMessage = await userContact.addMessage(name,email,phone,message);

            await userContact.save();

            res.status(201).json({ message : "user contact successfully"})
        }

    } catch (error) {
        console.log(error);
    }
})

router.get('/logout', authenticate,(req,res) => {
    console.log("Logout Page");
    res.clearCookie("jwtoken" , {path : "/" });
    res.status(200).send("User Logout Success");
});


module.exports = router;


























// router.post('/register',(req,res) => {
//     const { name, email, phone, work, password, cpassword  } = req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword ){
//         return res.status(422).json({error : "please filled the all fields"})
//     }
//     User.findOne({ email : email }).then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error : "Email is already exist"})
//         }
//         const user = new User({name,email,phone,work,password,cpassword});

//         user.save().then(() => {
//             res.status(201).json({message : "user created successfully"});
//         }).catch(() => res.status(500).json({error : "failed to register"}));
//     }).catch(err => {console.log(err); }); 

// });


















