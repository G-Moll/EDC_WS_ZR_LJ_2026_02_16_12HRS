// Primitive Data Types
// Complex/Compound Data Types

// Literal Object
let x = {
    name: "Joshua",
    age: 30,
    hobbies: [ "reading", "walking" ]
};
// Literal Array
let y = [
    false, 1,
    "Hello",
    function() {},
    {},
    []
];

// [] is a instance of Array
// z = new Array()

let tasks = [
    { title: "Workout", description: "Hacer ejercicio en en el Gym", price: 1500, pending: false },
    { title: "Coding", description: "Desarrollar algunas aplicaciones", price: 1000, pending: true },
    { title: "Comer", description: "Desayunar, comer y cenar", price: 300, pending: false },
    { title: "EDC", description: "Tomar talleres en Pilares", price: 0, pending: true }
];

let tasksPrice = tasks.reduce( function( counter, task ) {
    return counter + task.price;
}, 0 );
// console.log( tasksPrice );


// filter
let tasksPending = tasks.filter( function( task ) {
   // return task.price >= 500;
   return task.pending;
});
// console.log( tasksPending );



// map applies a function over every index
let taskTitles = tasks.map( function( task, index ) {
    return `${ index + 1 }: ${ task.title }`;
});
// console.log( taskTitles );


// filter
let tasksMixed = tasks
    .filter( function( task ) {
       // return task.price >= 500;
       return task.pending;
    })
    .map( function( task, index ) {
        return ( index + 1 ) + " " + ( task.title );
    })    ;
console.log( tasksMixed );
