// Standar/Regular Function

let person = {
    name: "Joshua",
    sayHelloFn: function() {
        console.log( "Standard" );
        console.log( this );
        console.log( this.name );
    },
    sayHelloArrow: () => {
        console.log( "Arrow" );
        console.log( this );
        console.log( this.name );
    }
}

person.sayHelloFn();
person.sayHelloArrow();



