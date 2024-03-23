const express = require('express');
const router = express.Router();
const {addBook,AllBooks, getByID,updateById,deleteById}= require('../Controller/BookController');

router.get('/AllBooks',AllBooks);
router.post('/addBook',addBook);
router.get('/getBookbyID/:id',getByID);
router.put('/updateById/:id',updateById);
router.delete('/deleteById/:id', deleteById);
module.exports = router;