const express = require( 'express' );
const postsController = require( '../controllers/posts.controller' );

const postsRouter = express.Router();

// Ahora se utiliza _id, el que genera MongoDB Atlas
// se usan en "get" por producto y en "delete"
postsRouter.get( "/posts", postsController.getPosts );
postsRouter.get( "/posts/:_id", postsController.getPost );
postsRouter.post( "/posts", postsController.createPost );
postsRouter.put( "/posts", postsController.updatePost );
postsRouter.delete( "/posts/:_id", postsController.deletePost );

module.exports = postsRouter;
