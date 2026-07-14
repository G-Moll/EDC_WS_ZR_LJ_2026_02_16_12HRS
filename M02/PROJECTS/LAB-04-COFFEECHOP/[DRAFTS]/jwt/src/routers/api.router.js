const { Router } = require( "express" );
const { authRouter } = require( "./auth.router" )

const apiRouter = Router();

apiRouter.use( "/auth", authRouter );

module.exports = { apiRouter };
