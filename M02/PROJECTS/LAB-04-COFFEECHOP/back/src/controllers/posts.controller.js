const Post = require( "../models/post.model" );

exports.getPosts = async ( request, response ) => {
    
    try {
        const posts = await Post.find();
        response.status( 200 ).json({
            message: "Found posts",
            data: posts,
            count: posts.length
        });
    }
    catch( e ) {
        response.status( 500 ).json({
            message: "Posts not found...",
            error: e.message
        });
    }
}

exports.getPost = async ( request, response ) => {
    try {
        const postId = request.params.id;
        const post = await Post.findById( postId );

        if( ! post ) {
            return response.status( 404 ).json({
                message: "Post not found...",
                data: post
            });
        }
        
        response.status( 200 ).json({
            message: "Post found..!",
            data: post
        });
    }
    catch( e ) {
        response.status( 500 ).json({
            message: "Error Server...!",
            error: e.message
        });
    }
};

exports.createPost = async ( request, response ) => {
    try {
        const post = new Post( request.body );
        const result = await post.save();

        console.log( request.body );
        response.status( 200 ).json( { post: result } );
    }
    catch( e ) {
        response.status( 400 ).json( { error: e } );
    }
}

exports.updatePost = async ( request, response ) => {
    try {
        const { _id } = request.body;

        const post = await Post.findByIdAndUpdate(
            _id,
            request.body, 
            {
                returnDocument: 'after',
                runValidators: true
            }
        );
        
        if( !post ) {
            return response
                .status( 404 )
                .json( { error: 'Post no encontrado' } );
        }
        
        console.log( `Post ${ _id } actualizado:`, request.body );
        response
            .status( 200 )
            .json( { post: post } );
    }
    catch( e ) {
        response
            .status( 400 )
            .json( { error: e.message } );
    }
}

exports.deletePost = async ( request, response ) => {
    try {
        const postId = request.params.id;
        const deletedPost = await Post.findOneAndDelete( { _id: postId } );
        
        if( ! deletedPost ) {
            return response
                .status( 404 )
                .json({ 
                    error: 'Post no encontrado',
                    message: `No existe ningún post con el ID: ${ postId }`
                });
        }
        
        response
            .status( 200 )
            .json({ 
                message: 'Post eliminado correctamente',
                deletedPost: deletedPost
            });
    }
    catch( e ) {
        response
            .status( 400 )
            .json( { error: e.message } );
    }
}
