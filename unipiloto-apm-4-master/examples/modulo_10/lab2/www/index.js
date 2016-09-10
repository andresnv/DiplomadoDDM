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


'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vehicle = (function () {
    function Vehicle(wheel, fuel, color) {
        if (color === void 0) { color = 'white'; }
        this.wheel = wheel;
        this.fuel = fuel;
        this.color = color;
    }
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        _super.call(this, 4, 'gas', 'red');
    }
    return Car;
}(Vehicle));
var Motorcycle = (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        _super.call(this, 2, 'gasoline');
    }
    return Motorcycle;
}(Vehicle));
var car = new Car();
var motorcycle = new Motorcycle();
console.log(car);
console.log(motorcycle);
