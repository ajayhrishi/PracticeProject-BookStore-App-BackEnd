
const Book = require('../Model/Book');

const AllBooks= async(req,res,next)=>{
    // this is the route that will help us to get all the books from the data base. 
    let books;
    try{
         books = await Book.find();
    }catch(err){
     console.log(err);
    }
    if(!books) {return res.status(404).json({message:'No books found'})}
    return res.status(200).json({books});
 }

const addBook = async(req,res,next)=>{
    let book;
    const {name,author,price,availability,description}=req.body;
    try{
        book= new Book({
            name,
            author,
            price,
            description,
            availability
        })
        await book.save();

    }catch(err){
        console.log(err);
        if(!book){
            res.status(500).json({message:'Unable to Add'})
        }    
        return res.status(201).json({book})
    }

};
module.exports={addBook,AllBooks};