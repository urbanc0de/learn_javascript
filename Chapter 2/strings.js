// --- JavaScript Data Types ---

//- Number:  1,2,3,100....3.14
//- String: 'hello,world'   'something@something.com
//- Boolean: true  / false
//- Null: variable with no value on purpose
//- Undefined: variable is not yet defined.
//- Object: Complex data structures - Arrays, Dates, Literals, etc..
//- Symbol: Used with objects.


//1. Strings
console.log('hello, world');
let email = 'stored@email.com'; //you can store strings in variables
console.log(email);

//string concatenation (Joining Strings)
let firstName = 'Tibi';
let lastName = 'Urban';

let fullName = firstName + ' ' + lastName; //joins the two strings together to a new string variable with a space
console.log(fullName);

//picking out/getting characters
console.log(fullName[0]); //writes the first character on the console
console.log(fullName[2]); //writes the third character on the console

//string's length
console.log(fullName.length); //writes the length of the string

//string methods
//_Method (some kind of function that does something)
console.log(fullName.toUpperCase()); 
//in this case, the to UpperCase is the method, it turns every char. to uppercase

//you can store a method's result in a variable to use later on
let result = fullName.toLowerCase();
console.log(result);

//A value inside a method is an argument
let index = email.indexOf('@'); //Finds the index(position) inside the valuable
console.log(index);

// a) Common String methods
//-lastIndexOf() finds the last index/position of the given argument ex.:('m')
let outcome = email.lastIndexOf('m');
console.log(outcome);

//-slice cuts the string from x to x. ex.: (0from,to10)
let sliceOutcome = email.slice(0,5);
console.log(sliceOutcome);

//-substr (substring) its like slice but if you start at 4 and to 10, that 10 adds up and goes to 14
let substrOutcome = email.substr(4,10);
console.log(substrOutcome);

//-replace, replaces the first found argument with the second, ('m','y') m to y
let replaceOutcome = email.replace('m', 'y');
console.log(replaceOutcome);


