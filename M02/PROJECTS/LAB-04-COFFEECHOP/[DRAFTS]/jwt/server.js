const express = require( "express" );
const dotenv = require( "dotenv" );
const authRoutes = require( "./src/routers/auth.router" );

dotenv.config();

const app = express();

// Middlewares globales
app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );

// Rutas
app.use( "/", authRoutes );

app.listen( 3000, () => {
    console.log( "Server Running..." );
} );
