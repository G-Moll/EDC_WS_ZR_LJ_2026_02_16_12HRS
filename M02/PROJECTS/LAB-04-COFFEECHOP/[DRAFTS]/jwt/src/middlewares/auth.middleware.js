const jwt = require( "jsonwebtoken" );

const authMiddleware = {
    validateAccessToken: ( req, res, next ) => {
        const accessToken = req.headers[ "authorization" ] || req.query.accessToken;
        console.log( "ACCESS TOKEN", accessToken );

        if( ! accessToken ) {
            return res
                .status( 401 )
                .json( { message: "Access denied: Token not found" } );
        }

        jwt.verify( accessToken, process.env.JWT_SECRET, ( error, user ) => {
            if( error ) {
                return res
                    .status( 403 )
                    .json( { message: "Access denied: Token expired or incorrect" } );
            }
            else {
                req.user = user;
                next();
            }
        });
    }
};

module.exports = authMiddleware;
