const { Router } = require( "express" );
const { authRouter } = require( "./auth.router" )
const { uiRouter } = require( "./ui.router" );

const apiRouter = Router();

apiRouter.use( "/auth", authRouter );
apiRouter.use( "/ui", uiRouter );

module.exports = { apiRouter };
