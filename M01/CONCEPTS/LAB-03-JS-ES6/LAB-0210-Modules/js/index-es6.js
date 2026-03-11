import { Person } from "./modules/es6/Person.js";
import { messageFrom as message } from "./modules/es6/message.js";

let personOne = new Person( "Joshua", 30 );
console.log( personOne );
personOne.sayHello();

message( "Web en pilares..." );
