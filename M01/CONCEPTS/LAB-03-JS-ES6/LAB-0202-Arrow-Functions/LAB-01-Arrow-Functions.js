// ES5 Standard/Regular Functions
function sayHello( name ) {
    return "Hello " + name;
}
// console.log( sayHello( "Joshua" ) );

function calculateAreafn( width, height ) {
    return width * height;
}
var area = calculateAreafn( 100, 200 );
// console.log( area );

var sample = function() {
    return 10;
}
// console.log(sample());


// ES6 Arrow Functions
let sayHelloArrow = () => {
    return "Hello Joshua";
}
// console.log(sayHelloArrow() );

let calculateAreaArrow = ( width, height ) => {
    return width * height;
}
// console.log( calculateAreaArrow( 1000, 2000 ) );

let sayHelloSimplified = name => "hello " + name;
let calculateAreaSimplified = ( width, height ) => width * height;
console.log( sayHelloSimplified( "Joshua" ) );
console.log( calculateAreaSimplified( 10, 20 ) )
