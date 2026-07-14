const express = require( "express" );
const authController = require( "../controllers/auth.controller" );
const { validateAccessToken } = require( "../middlewares/auth.middleware" );

const authRouter = express.Router();

// Rutas públicas
authRouter.get( "/", authController.home );
authRouter.get( "/login", authController.showLogin );
authRouter.post( "/token", authController.authenticate );

// Rutas protegidas
authRouter.get( "/api", validateAccessToken, authController.getPosts );

module.exports = { authRouter };
