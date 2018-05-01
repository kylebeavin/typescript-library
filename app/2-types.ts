
/******************
 * 01 - Declaration
 ******************/
let username: string = "instructor";
let password: string = "Letmein1234!";
let instructorId: number = 5;

let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

let greeting = "Hello";
let pass: string;
pass = "1234";
/*****************
 * 02 - Basic Types
 *******************/

 //numbers
let age: number = 32;
let currentYear: number = 2018;

//strings 
let companyName: string;
companyName = "eleven fifty";

let appName: string = "twitter";
appName = "instagram";

//booleans
let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

//array
//1
let studentList: string[] = ['tom','tracy']
let allScores: Array<number> = [100, 92,95,96];

console.log("Student List: ", studentList[0]);

//any
let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

//void
function sayHelloToAll() : void {
    console.log("Hello to all!")
}


//null and undefined
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

//tuple
//declare a tuple type
let usernameAndId: [number, string];
// initialize it 
usernameAndId = [1,"kennisreally40"];//ok
// usernameAndId = ["ken26", 2];//not ok must match declaration
/****************
 * 03 - Union Types
 ****************/

let x: number | string;
let y: number | null;

x = '1234';
x = 1234;

// x = true;
// y = false;
