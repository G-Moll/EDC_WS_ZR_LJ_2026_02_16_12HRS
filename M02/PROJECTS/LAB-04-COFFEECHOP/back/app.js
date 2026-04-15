const dotenv = require( 'dotenv' );
const express = require( 'express' );
const mongoose = require( 'mongoose' );

const postsRouter = require( './src/routers/posts.router' );
const app = express();
const port = 8282;

dotenv.config();

mongoose
    .connect( process.env.MONGO_URI )
    .then( () =>  {
        console.log( "Conexion extablecida" );
    })
    .catch( ( e ) => {
        console.log( "No se pudo establecer la Conexion", e );
    })


app.use( postsRouter );

app.listen( port, () => {
    console.log( `API is listening on port: ${ port }` )
});
