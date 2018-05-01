/******************
 * 01 - Declaration
 ******************/
var username = "instructor";
var password = "Letmein1234!";
var instructorId = 5;
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
var greeting = "Hello";
var pass;
pass = "1234";
/*****************
 * 02 - Basic Types
 *******************/
//numbers
var age = 32;
var currentYear = 2018;
//strings 
var companyName;
companyName = "eleven fifty";
var appName = "twitter";
appName = "instagram";
//booleans
var isLoggedIn = true;
var isGoldLevelUser = true;
//array
//1
var studentList = ['tom', 'tracy'];
var allScores = [100, 92, 95, 96];
console.log("Student List: ", studentList[0]);
//any
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
//void
function sayHelloToAll() {
    console.log("Hello to all!");
}
//null and undefined
var undefinedVariable = undefined;
var nullVariable = null;
//tuple
//declare a tuple type
var usernameAndId;
// initialize it 
usernameAndId = [1, "kennisreally40"]; //ok
// usernameAndId = ["ken26", 2];//not ok must match declaration
/****************
 * 03 - Union Types
 ****************/
var x;
var y;
x = '1234';
x = 1234;
// x = true;
// y = false;
//# sourceMappingURL=2-types.js.map