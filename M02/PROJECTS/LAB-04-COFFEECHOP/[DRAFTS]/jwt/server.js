const express = require( "express" );
const dotenv = require( "dotenv" );
const jwt = require( "jsonwebtoken" );

dotenv.config();

// app config
const app = express();
app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );

// routes
app.get( "/", ( req, res ) => {
    res.send( "Hello Joshua..!" );
} );

app.get( "/api", ( req, res ) => {
    res.json( {
        posts: [
            { id: 1, title: "Post Uno", content: "Contenido del post uno" },
            { id: 2, title: "Post Dos", content: "Contenido del post dos" },
            { id: 3, title: "Post Tres", content: "Contenido del post tres" }
        ]
    } );
} );

app.get( "/login", ( req, res ) => {
    res.send(`<html>
        <head>
            <title>Login</title>
        </head>

        <body>
            <form method="POST" action="/auth">
                Usuario: <input type="text" name="text" /><br />
                Contraseña: <input type="password" name="password" /><br />
                <input type="submit" value="Iniciar sesión" />
            </form>
        </body>
    </html>`);
} );

app.post( "/auth", ( req, res ) => {
    res.send( "Data from form..." );
} );

function generateAccessToken( encriptionData ) {
}

function validateAccessToken( req, res, next ) {
}

app.listen( 3000, () => {
    console.log( "Server Running..." );
} );


