const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the CORS middleware
const router = require('../book-store-backend/Routes/BookStoreRoutes');
dotenv.config();

const app = express();
const db = process.env.DB
// Use the CORS middleware to allow requests from all origins (*)
app.use(cors());

app.use(express.json());

mongoose
  .connect(db)
  .then(() => console.log('Connected to the database'))
  .then(() => app.listen(5000))
  .catch((err) => console.log('Failed to connect with the database', err));

app.use('/', router);   