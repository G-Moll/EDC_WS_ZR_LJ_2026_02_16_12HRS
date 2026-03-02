// Create a Promise
// Pending
//  Resolved
//  Rejected
// Validar la cantida de elementos que tiene un arreglo;
// Si los elementos al menos 5, listarlos en la consola
// Si son menos que 5, mandar un mensaje de Quorum no suficiente

let promise = new Promise( function( resolve, reject ) {
    setTimeout( function() {
        Math.random() >= 0.5 ?
            resolve( "Promise resolved" ) :
            reject( "Promise rejected" ) ;
    }, 2000 );
});

promise
    .then( function( data ) {
        console.log( data );
    })
    .catch( function ( error ) {
        console.log( error );
    });

    // console.log( "Hello" );

