const jwt = require( "jsonwebtoken" );

// Modelo ( simulado )
const UserModel = require( "../models/UserModel" );

const authController = {
    // GET /
    generateAccessToken: ( encriptionData ) => {
        return jwt.sign(
            encriptionData,
            process.env.JWT_SECRET,
            { expiresIn: "5m" }
        );
    },

    // POST /auth
    authenticate: ( req, res ) => {
        const { username, password } = req.body;
        
        // Aquí podrías validar credenciales con el modelo
        const user = UserModel.findByName( username, password );
        
        if( ! user ) {
            return res
                .status( 401 )
                .json( { message: "Invalid credentials" } );
        }

        const accessToken = authController.generateAccessToken( { username: user.username } );
        
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
