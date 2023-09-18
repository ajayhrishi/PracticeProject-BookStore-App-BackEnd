const express = require('express');
const router = express.Router();
const {addBook,AllBooks}= require('../Controller/BookController');

router.get('/',AllBooks);
router.post('/',addBook);
module.exports = router;