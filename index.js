//============== Declaring variables=======================//

// longhand
let a;
let b = 2;
//shorthand
let a,b = 2;




//=========== Assigning values to multiple variables========//

// longhand
let a,b,c;
a = 1;
b = 2;
c = 3;
// shorthand
let [a,b,c] = [1,2,3];



//============Ternary Operator=============================//

//Longhand 
let marks = 26; 
let result; 
if(marks >= 30){
 result = 'Pass'; 
}else{ 
 result = 'Fail'; 
} 
//Shorthand 
let result = marks >= 30 ? 'Pass' : 'Fail';



//===========Assigning default values=======================//

//Longhand 
let imagePath; 
let path = getImagePath(); 
if(path !== null && path !== undefined && path !== '') { 
  imagePath = path; 
} else { 
  imagePath = 'default.jpg'; 
} 

//Shorthand 
let imagePath = getImagePath() || 'default.jpg';




//===========Swap 2 variables =================================//

let x = 'Hello World', y = 15; 
//Longhand 
const temp = x; 
x = y; 
y = temp; 

//Shorthand 
[x, y] = [y, x];



//===========Arrow Function==================================//

//Longhand 
function add(num1, num2) { 
    return num1 + num2; 
 } 
 
 //Shorthand 
 const add = (num1, num2) => num1 + num2;



 //==========Multiple condition checking===============================//

 //Longhand 
function add(num1, num2) { 
    return num1 + num2; 
 } 
 
 //Shorthand 
 const add = (num1, num2) => num1 + num2;


 //============Object property argument========================//

 //Longhand 
function add(num1, num2) { 
    return num1 + num2; 
 } 
 
 //Shorthand 
 const add = (num1, num2) => num1 + num2;


 //================Exponent Power=============================//

 //Longhand 
function add(num1, num2) { 
    return num1 + num2; 
 } 
 
 //Shorthand 
 const add = (num1, num2) => num1 + num2;


 //============Merging of array===============================//
 //Longhand 
function add(num1, num2) { 
    return num1 + num2; 
 } 
 
 //Shorthand 
 const add = (num1, num2) => num1 + num2;