let message = require( "./modules/cjs/message" );
let Person = require( "./modules/cjs/Person" );

console.log( message );
message( "Express desde pilares..." );
let personOne = new Person( "Joshua", 30 );
personOne.sayHello();
