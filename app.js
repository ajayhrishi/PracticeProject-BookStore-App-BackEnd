const express = require('express'); // copying the data of the express to the express variable
const mongoose = require('mongoose'); //copying the mongoose to the mongoose variable
const router = require('../book-store-backend/Routes/BookStoreRoutes');
const app = express(); //adding the functionalities of the express to the app variable
app.use(express.json());
// connecting to the database 
mongoose.connect('mongodb+srv://admin:fRYpKr63E9GAbfKr@cluster0.1ihedfg.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('connected to the database'))
.then(()=>app.listen(5000)).catch((err)=>console.log("Failed to connect with the database",err));



app.use("/",router); // added a middleware to give a default response to the route. 