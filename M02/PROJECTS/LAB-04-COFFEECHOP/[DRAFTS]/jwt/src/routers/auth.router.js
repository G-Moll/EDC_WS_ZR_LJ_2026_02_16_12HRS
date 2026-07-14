const express = require( "express" );
const authController = require( "../controllers/auth.controller" );
const { validateAccessToken } = require( "../middlewares/auth.middleware" );

const router = express.Router();

// Rutas públicas
router.get( "/", authController.home );
router.get( "/login", authController.showLogin );
router.post( "/auth", authController.authenticate );

// Rutas protegidas
router.get( "/api", validateAccessToken, authController.getPosts );

module.exports = router;
