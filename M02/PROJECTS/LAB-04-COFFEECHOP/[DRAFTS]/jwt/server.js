const express = require( "express" );
const dotenv = require( "dotenv" );
const { apiRouter }  = require( "./src/routers/api.router" );

dotenv.config();

const app = express();

// Middlewares globales
app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );

// Rutas
app.use( "/", apiRouter );

app.listen( 3000, () => {
    console.log( "Server Running..." );
} );
