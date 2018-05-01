var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
//3
var phil = new Person();
//4
phil.firstName = "Phil";
phil.lastName = "Donahue";
var someVariableName = new Person();
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var kyle = new Student();
kyle.age = 32;
kyle.isMarried = true;
kyle.firstName = "kyle";
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name; //4 
        this.gameMaker = maker;
    }
    return Game;
}());
//5                                 //6
var battleship = new Game('Battleship', 'Hasbro');
var Car = /** @class */ (function () {
    function Car(make, model) {
        this.carMake = make;
        this.carModel = model;
    }
    return Car;
}());
var truck = new Car('f150', 'ford');
//# sourceMappingURL=4-classes.js.map