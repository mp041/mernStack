// express-require
const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
app.use(cookieParser());
// mongoose-require
const mongoose = require('mongoose');
// dotenv-require
const dotenv = require('dotenv')

// dotenv
dotenv.config({ path: './config.env' });

// const User = require('./model/userSchema');
app.use(express.json());
app.use(require('./router/auth'));




// DB-conn.js
require('./DB/conn');


// Mongodb/Mongoose
const DB = process.env.DATABASE


//PORT
const PORT = process.env.PORT




// MiddleWare
// const middleware = (req,res,next) => {
//     console.log('hello middleware')
//     next();
// }


// Path
// app.get('/',(req,res) => {
//     res.send("hello world")
// });

app.get('/contact',(req,res) => {
    res.send("hello Contact me")
});
app.get('/signin',(req,res) => {
    res.send('signin page')
});
app.get('/signup',(req,res) => {
    res.send('signup page')
})


// LocalHost
app.listen(PORT,() => {
    console.log(`listening On Host ${PORT}`);
});