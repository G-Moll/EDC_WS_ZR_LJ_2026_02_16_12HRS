const mongoose = require( 'mongoose' );

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "title property is requited...",
        minlength: 4,
        maxlength: 20
    },
    content: {
        type: String,
        required: "content property is requited...",
        minlength: 10,
        maxlength: 120
    }
});

module.exports = mongoose.model( "Post", postSchema );
