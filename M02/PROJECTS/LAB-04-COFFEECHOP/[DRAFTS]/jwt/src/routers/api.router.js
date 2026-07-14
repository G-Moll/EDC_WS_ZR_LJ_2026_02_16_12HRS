const { Router } = require( "express" );
const appController = require( "../controllers/app.controller" );

const apiRouter = Router;

app.get( "/", ( req, res ) => {
    res.send( "Hello Joshua" );
} );

app.get( "/api", ( req, res ) => {
    res.json( {
        username: req.user,
        twits: [
            { id: 1, text: "First twit", username: "Joshua" },
            { id: 2, text: "Second twit", username: "Peter" },
            { id: 3, text: "Third twit", username: "Paul" }
        ]
    } )
} );

app.get( "/login", ( req, res ) => {
    res.send( `<html>
        <head>
            <title>Login</title>
        </head>
        <body>
            <form method="POST" action="/auth">
                Usuario: <input type="text" name="text" /><br />
                Password: <input type="password" name="password" /><br />
                <input type="submit" value="Iniciar Sesión" />
            </form>
        </body>
    </html>` );
} );

app.post( "/auth", ( req, res ) => {
    const { username, password } = req.body;

    // Here the DB is consulted in order to find the required user
    const user = { username: username };
    const accessToken = generateAccessToken( user );
    res
        .header( "authorization", accessToken )
        .json( { message: "Auth User", token: accessToken } );
} );



