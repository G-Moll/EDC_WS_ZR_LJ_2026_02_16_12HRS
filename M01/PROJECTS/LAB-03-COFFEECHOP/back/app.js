const express = require( 'express' );

const postsRouter = require( './routers/posts.router' );
const app = express();
const port = 8282;

app.use( postsRouter );

app.listen( port, () => {
    console.log( `API is listening on port: ${ port }` )
});
