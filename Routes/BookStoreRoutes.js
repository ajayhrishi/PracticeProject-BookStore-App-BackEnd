const express = require('express');
const router = express.Router();
const {addBook,AllBooks}= require('../Controller/BookController');

router.get('/AllBooks',AllBooks);
router.post('/addBook',addBook);
module.exports = router;