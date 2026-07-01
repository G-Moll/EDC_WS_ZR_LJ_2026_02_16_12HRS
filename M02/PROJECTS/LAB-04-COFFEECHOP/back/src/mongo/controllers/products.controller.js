const Product = require( "../models/product.model" );

exports.getProducts = async ( request, response ) => {
    
    try {
        const products = await Product.find();
        response.status( 200 ).json({
            message: "Found products",
            data: products,
            count: products.length
        });
    }
    catch( e ) {
        response.status( 500 ).json({
            message: "Products not found...",
            error: e.message
        });
    }
}

exports.getProduct = async ( request, response ) => {
    try {
        const productId = request.params._id;
        const product = await Product.findById( productId );

        if( ! product ) {
            return response.status( 404 ).json({
                message: "Product not found...",
                data: product
            });
        }
        
        response.status( 200 ).json({
            message: "Product found..!",
            data: product
        });
    }
    catch( e ) {
        response.status( 500 ).json({
            message: "Error Server...!",
            error: e.message
        });
    }
};

exports.createProduct = async ( request, response ) => {
    try {
        const product = new Product( request.body );
        const result = await product.save();

        console.log( request.body );
        response.status( 200 ).json( { product: result } );
    }
    catch( e ) {
        response.status( 400 ).json( { error: e } );
    }
}

exports.updateProduct = async ( request, response ) => {
    try {
        const { _id } = request.body;
        console.log( _id );
        console.log( request.body );

        const product = await Product.findByIdAndUpdate(
            _id,
            request.body, 
            {
                returnDocument: "after",
                runValidators: true
            }
        );

        console.log( product );
        
        if( ! product ) {
            return response
                .status( 404 )
                .json( { error: "Producto no encontrado" } );
        }
        
        console.log( `Producto ${ _id } actualizado:`, request.body );
        response
            .status( 200 )
            .json( { product: product } );
    }
    catch( e ) {
        response
            .status( 400 )
            .json( { error: e.message } );
    }
}

exports.deleteProduct = async ( request, response ) => {
    try {
        const productId = request.params._id;
        const deletedProduct = await Product.findOneAndDelete( { _id: productId } );

        if( ! deletedProduct ) {
            return response
                .status( 404 )
                .json({ 
                    error: "Product no encontrado",
                    message: `No existe ningún producto con el ID: ${ productId }`
                });
        }

        response
            .status( 200 )
            .json({ 
                message: "Producto eliminado correctamente",
                deletedProduct: deletedProduct
            });
    }
    catch( e ) {
        response
            .status( 400 )
            .json( { error: e.message } );
    }
}
