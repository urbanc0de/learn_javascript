// ____ Datatype Conversion
let level = '120';


//let result = Number('szevasz');  NaN


//string to number
level = Number(level)

console.log(level + 1);
console.log(typeof level); //kiírja a változó típusát

//Number to string
let result = String(50); //stringet csinál a számból
console.log(result);

//Boolean, vannak true és false értékek
let outcome = Boolean(100);
console.log(outcome);

//a string mindig true kivéve ha üres
let stringbool = Boolean('0');
console.log(stringbool);

