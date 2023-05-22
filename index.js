// TASK 1
let a = 3; 
let b = 5; 
let c;

// alert( "description of alerted_value: " + alerted_value );
let output = `let a = 3;"\n"let b = 5;"\n"let c;"\n"-------------"\n"a + b = ${a + b}"\n"a - b = ${a - b}"\n"a * b = ${a * b}"\n"a / b = ${a / b}"\n"a % b = ${a % b}"\n"a += b = ${a += b}"\n"a -= b = ${a -= b}"\n"a *= b = ${a *= b}"\n"a /= b = ${a /= b}"\n"a %= b = ${a %= b}"\n"a == b = ${a == b}"\n"a != b = ${a != b}"\n"a > b = ${a > b}"\n"a < b = ${a < b}"\n"!a && !c = ${!a && !c}"\n"!a || !c = ${!a || !c}`;

alert(output);
/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/


//TASK 2
//Declare the variable first_name and assign it with the value of your first name;
let first_name = "Mary";

//Declare the variable last_name and assign it with the value of your last name;
let last_name = "Fabeyo";

//Declare the variable email and assign it with the value of your email;
let email = "fabe0015@algonquinlive.com";

//Declare the variable output;
let experiment;

//Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
 experiment ="My name is" + " " + first_name + " " + last_name + " " + "You can contact me at" + " " + email + ".";
 console.log(experiment);


//Assign output with gotten expression;
experiment = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;
console.log(experiment);


//Alert output.
alert(`My name is ${first_name} ${last_name}. You can contact me at ${email}.`); // prints My name is Mary Fabeyo. You can contact me at fabe0015@algonquinlive.com.
