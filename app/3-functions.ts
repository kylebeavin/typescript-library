let demoFunction = (someNum) => {
    return someNum;
}

demoFunction(1); //1
demoFunction("stuff"); //2
// demoFunction(1,"Stuff"); //3

function addNumbers(numOne: number, numTwo: number){
    return numOne + numTwo;
}
​
//1 - Works 
addNumbers(1, 2);
​
//2 - Errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo");

function sayHello(name: string) : string {
    return name;
}
​
sayHello("Kenn"); //3
// sayHello(1); //4

//optionals
function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string){
    console.log(someString);
    return numOne + numTwo;
}
​
    //5
addNumbersWithOptional(1, 2); //3
addNumbersWithOptional(1, 2, "This is optional"); //4