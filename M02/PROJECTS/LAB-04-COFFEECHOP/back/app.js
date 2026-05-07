// IMPORT EXTERNAL/BUILT-IN MODULES
const dns = require( 'node:dns' );
const dotenv = require( 'dotenv' );
const cors = require( 'cors' );
const express = require( 'express' );
const mongoose = require( 'mongoose' );
const bodyParser = require( 'body-parser' );

// IMPORT CUSTOM MODULES
const postsRouter = require( './src/routers/posts.router' );
const productsRouter = require( './src/routers/products.router' );

// SETUP MODULES
dns.setServers( [ '8.8.8.8', '8.8.4.4' ] );
dotenv.config();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: [ "GET", "POST" ],
    allowedHeaders: [ "Content-Type" ]
};

// SETUP APP
const app = express();
const port = 8282;

// CONNECT DATABASE
mongoose
    .connect( process.env.MONGO_URI )
    .then( () =>  {
        console.log( "Success Connection..!" );
    })
    .catch( ( e ) => {
        console.log( "Failure Connection...", e );
    })

app.use( cors( corsOptions ) );

app.use( bodyParser.json() );
app.use( postsRouter );
app.use( productsRouter );

app.listen( port, () => {
    console.log( `API is listening on port: ${ port }` )
});
