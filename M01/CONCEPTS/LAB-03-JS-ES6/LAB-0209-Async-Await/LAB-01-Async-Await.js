async function fetchData() {
    try {
        var response = await fetch( "https://jsonplaceholder.typicode.com/users" );
        var data = await response.json();
        console.log( "Data:", data );
    }
    catch( e ) {
        console.log( e );
    }
}
fetchData();

