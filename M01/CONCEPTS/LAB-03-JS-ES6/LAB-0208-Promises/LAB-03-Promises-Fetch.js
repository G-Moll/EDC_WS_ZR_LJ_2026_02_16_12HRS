fetch( "https://jsonplaceholder.typicode.com/users" ) // axios
    .then( function( response ) {
        // console.log( response );
        return response.json();
    })
    .then( function( data ) {
        console.log( data );
        processUsers( data );
    })
    .catch( function( e ) {
        console.log( e );
    });

function processUsers( usersArray ) {
    // ....
}


