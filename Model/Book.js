const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({// schemea for the structure of the book with all the necessory details that should be filled in. 
    name:{type:String, required:true}, 
    author:{type:String, required:true},
    price:{type:Number, required:true},
    available:{type:Boolean, required:true},
    image:{type:String, required:true}
});

module.exports= mongoose.model("Book",BookSchema);  // exporting Book's structure from this file as the moongoose model
