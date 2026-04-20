// IMPORT EXTERNAL/BUILT-IN MODULES
const dns = require( 'node:dns' );
const dotenv = require( 'dotenv' );
const express = require( 'express' );
const mongoose = require( 'mongoose' );
const bodyParser = require( 'body-parser' );

// IMPORT CUSTOM MODULES
const postsRouter = require( './src/routers/posts.router' );

// SETUP MODULES
dns.setServers( [ '8.8.8.8', '8.8.4.4' ] );
dotenv.config();

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

app.use( bodyParser.json() );
app.use( postsRouter );

app.listen( port, () => {
    console.log( `API is listening on port: ${ port }` )
});
