class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log( this.name + " " + this.age );
    }
}

module.exports = Person;
