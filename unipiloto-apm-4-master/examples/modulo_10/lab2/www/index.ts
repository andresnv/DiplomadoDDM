/*'use strict';

var my_array: Array<number> = [1,2,3,4,3];

var other_array: Array<any> = ["array", 3, 5, 6, [1,2,3,4]];

var tasks: Array<number> = [1,3,4,5];

function greeter(person: Array<string>){
    return person;
}

var user: Array<string> = ["1","32"];

console.log(greeter(user));

var words: string = 'string o caracter';

console.log(words);


var a: number = 4;
var b: number = 5;

var sum = function(c: number, d: number){
	return c + d;
}

console.log(sum(a, b));*/


/*

'use strict';

class Vehicle {
    wheel: number;
    fuel: string;
    private color: string;

    constructor(wheel: number, fuel: string, color: string = 'white'){
        this.wheel = wheel;
        this.fuel = fuel;
        this.color = color;
    }
}

class Car extends Vehicle {
    constructor(){
        super(4, 'gas', 'red');
    }
}

class Motorcycle extends Vehicle {
    constructor(){
        super(2, 'gasoline');
    }
}

var car = new Car();
var motorcycle = new Motorcycle();

console.log(car);
console.log(motorcycle);*/



'use strict';

class User {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    phone: number;
    password: string

    constructor(id: number = 1, firstname: string = '', lastname: string = '', phone: number = 1, password: string = '', email: string = ''){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.password = password;
        this.email = email;
    }

    setId(id: number): void {
    	this.id = id;
    }

    getId(){
    	return this.id;
    }
}

var user = new User(10, "Alejandro", "Romero", 12222332, 'pass', 'alejo@email.com');

user.setId(25);
console.log(user.getId());