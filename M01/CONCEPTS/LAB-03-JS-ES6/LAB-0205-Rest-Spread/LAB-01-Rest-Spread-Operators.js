// Rest-Spread-Operators
// ...
let person = {
    name: "Joshua",
    age: 30,
    hobby: "Reading",
    job: "Teacher"
}
let actions = {
    walk: () => { return "Walking..."; },
    multiply: () => { return "Multiplying..!" },
    sum: () => { return "Summing..!" }
}

let oddNumbers = [ 1, 3, 5, 7, 9 ];
let evenNumbers = [ 0, 2, 4, 6, 8 ];

// Read person object
// ES5
var name = person.name;
var age = person.age;
var hobby = person.hobby;
var job = person.job;

// ES6
// var { name, age, hobby, job } = person;
var { name, age, ...elseProperties } = person;
// console.log( name, age, elseProperties );

// ES5
var walk = actions.walk;
var multiply = actions.multiply;

// ES6
var { walk, ...elseActions } = actions;
// console.log( walk );
// console.log( elseActions );


// Improved Object
let personImproved = {
    id: 1,
    ...person,
    ...actions
}
// console.log( personImproved );

let allNumbers = [ Number.POSITIVE_INFINITY, ...oddNumbers, ...evenNumbers, Number.NEGATIVE_INFINITY ];
console.log( allNumbers );
