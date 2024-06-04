const dotenv = require("dotenv");// package that lets us read from dotenv//
dotenv.config();//method that actually reads the variables//
const express = require("express");//importing express for the routing software that les us accept and handle http requests//
const app = express();//new instance, let me make one of you//

const mongoose = require("mongoose");
const methodOverride = require("method-override");//lets us override methods any methods not post and get
const morgan = require("morgan");//logging http requests, shows the 400, 300 http codes or errors

// Set the port from environment variable or default to 3000
//"?" = IF   ":" = ELSE ternary 
const port = process.env.PORT ? process.env.PORT : "3000";
//important to have a port variable to be able to change for the host// 

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware to parse URL-encoded data from forms/Read URL Encoded data/dont use the extended one
app.use(express.urlencoded({ extended: false }));
// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride("_method"));
// Morgan for logging HTTP requests
app.use(morgan('dev'));

/* ------------- Routes ------------ */
app.get('/', async (req, res) => {
    res.send('we did it!')
});







app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
