
const Book = require('../Model/Book');

const AllBooks = async (req, res, next) => {
    // this is the route that will help us to get all the books from the data base. 
    let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.log(err);
    }
    if (!books) { return res.status(404).json({ message: 'No books found' }) }
    console.log("received request in getting all the books.");
    return res.status(200).json({ books });
}

const addBook = async (req, res, next) => {
    let book;
    const { name, author, price, available, description } = req.body;
    console.log("received a data of name: ", name, ", author: ", author, ", price: ", price, ", available: ", available);
    try {
        book = new Book({
            name,
            author,
            price,
            description,
            available
        })
        await book.save();
    } catch (err) {
        console.log(err.message);
        const message= err.message;
        return res.status(500).json({ message });
    }
    
    return res.status(201).json({ "added to database ": book })
};

const getByID = async (req,res,next)=>{
    let book;
    try{
    book = await Book.findById(req.params.id);
    }catch(err){
        return  res.status(500).json(err.message);
    }
    console.log('sending the book with the id', req.params.id, 'to the client');
    return res.status(201).json({book});
}

const updateById = async(req,res,next)=>{
    console.log("reached the expected function");
    const {name,author,price,description,available} = req.body;
 try{
    await Book.findByIdAndUpdate(req.params.id,{name,
        author,
        price,
        description,
        available});
 }catch(err){
    console.log('I was here');
    return res.status(500).json(err.message);
 }
 return res.status(201).json({message:`book with id${req.id} has been updated.`});
}

const deleteById = async(req,res,next)=>{
    try {
        const idToRemove = req.params.id; // Extract the id from req.params
        const book = await Book.findByIdAndRemove(idToRemove, {});

        if (!book) {
            return res.status(404).json({ message: 'Unable to find the book with this id' });
        }

        return res.status(200).json({ message: 'Deleted successfully' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'An error occurred', errorname: err.message });
    }
}

module.exports = { addBook, AllBooks, getByID,updateById,deleteById };