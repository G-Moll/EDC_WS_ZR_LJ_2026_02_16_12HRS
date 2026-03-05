// Create a Promise
let promise = new Promise( function( resolve, reject ) {
    resolve( "Comenzando encadenamiento..!" );
});

promise
    .then( function( data ) {
        console.log( data );
        return "Segunda cadena";
    })
    .then( function( data ) {
        console.log( data );
        return { name: "Joshua" };
    })
    .then( function( data ) {
        data.age = 30;
        console.log( data );
        return data;
    })
    .then( function( data ) {
        console.log( data.age );
    })
    .catch( function( e ) {
        console.log( e );
    })
    ;
