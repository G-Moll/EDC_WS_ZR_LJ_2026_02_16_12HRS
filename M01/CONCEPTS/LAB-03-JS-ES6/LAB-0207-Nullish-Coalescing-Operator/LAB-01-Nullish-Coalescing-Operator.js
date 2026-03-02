// Nullish-Coalescing Operator
var user = {
    name: "Joshua",
    age:30,
    address: {
        street: "Liverpool",
        number: "10bis"
    }
};
// if (user.hobbies.suite.number !== undefined || user.hobbies.suite.number !== null )
// console.log( user.hobbies );
console.log( user?.hobbies?.suite?.number );
// console.log( user.address.floor );

