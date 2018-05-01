var demoFunction = function (someNum) {
    return someNum;
};
demoFunction(1); //1
demoFunction("stuff"); //2
// demoFunction(1,"Stuff"); //3
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
//1 - Works 
addNumbers(1, 2);
//2 - Errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo");
function sayHello(name) {
    return name;
}
sayHello("Kenn"); //3
// sayHello(1); //4
//optionals
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
//5
addNumbersWithOptional(1, 2); //3
addNumbersWithOptional(1, 2, "This is optional"); //4
//# sourceMappingURL=3-functions.js.map