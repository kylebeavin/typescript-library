class Person {
    //2
    firstName: string;
    lastName: string;
}
​
//3
let phil: Person = new Person();
​
//4
phil.firstName = "Phil";
phil.lastName = "Donahue";

let someVariableName: Person = new Person();

class Student {
    age: number;
    isMarried: boolean;
    firstName: string;
}

let kyle: Student = new Student();

kyle.age = 32;
kyle.isMarried = true;
kyle.firstName = "kyle";

class Game {
    constructor(name: string, maker: string){ //2
        this.gameName = name; //4 
        this.gameMaker = maker;
    }
    gameName: string; //3
    gameMaker: string;
}
​
//5                                 //6
let battleship: Game = new Game('Battleship', 'Hasbro');

class Car {
    constructor(make: string, model: string){
        this.carMake = make;
        this.carModel = model;
    }
    carMake: string;
    carModel: string;
}

let truck: Car = new Car('f150','ford');