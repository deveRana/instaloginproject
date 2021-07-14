
const dotenv = require('dotenv')
const express = require('express');

const app = express();


// Secure Your Passwords
// // Getting config File 
dotenv.config({ path:'./config.env' })


app.use(express.json());


// We Link the Router Files to make our route Easy
app.use(require('./router/auth.js'));


// Defining the Port
const port = process.env.PORT || 5000;


// 3rd Step Heroku

if(process.env.NODE_ENV == "production"){
    
    app.use(express.static('clientside/build'));

}


// Listenig
app.listen(port , ()=>{
    console.log(`Server Is Listening at Port : ${port}`);
});