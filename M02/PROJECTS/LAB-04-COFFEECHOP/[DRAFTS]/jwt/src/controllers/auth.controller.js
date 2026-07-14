const jwt = require( "jsonwebtoken" );

// Modelo ( simulado )
const UserModel = require( "../models/UserModel" );

const generateAccessToken = ( encriptionData ) => {
    return jwt.sign(
        encriptionData,
        process.env.JWT_SECRET,
        { expiresIn: "5m"
    } );
};

const authController = {
    // GET /
    home: ( req, res ) => {
        res.send( "Hello Joshua..!" );
    },

    // GET /api
    getPosts: ( req, res ) => {
        res.json( {
            username: req.user.username,
            posts: [
                { id: 1, title: "Post Uno", content: "Contenido del post uno" },
                { id: 2, title: "Post Dos", content: "Contenido del post dos" },
                { id: 3, title: "Post Tres", content: "Contenido del post tres" }
            ]
        } );
    },

    // GET /login
    showLogin: ( req, res ) => {
        res.send( `
            <html>
                <head>
                    <title>Login</title>
                </head>
                <body>
                    <form method="POST" action="/auth">
                        Usuario: <input type="text" name="username" /><br />
                        Contraseña: <input type="password" name="password" /><br />
                        <input type="submit" value="Iniciar sesión" />
                    </form>
                </body>
            </html>
        ` );
    },

    // POST /auth
    authenticate: ( req, res ) => {
        const { username, password } = req.body;
        
        // Aquí podrías validar credenciales con el modelo
        const user = UserModel.findByUsername( username, password );
        
        if( !user ) {
            return res.status( 401 ).json( { message: "Invalid credentials" } );
        }

        const accessToken = generateAccessToken( { username: user.username } );
        
        res
            .header( "authorization", accessToken )
            .json( { 
                message: "Auth user", 
                token: accessToken,
                user: { username: user.username }
            } );
    }
};

module.exports = authController;
