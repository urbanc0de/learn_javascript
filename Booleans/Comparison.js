let level = 90;

//Loose Comparison (másfajta datatype még mindig lehet egyenlő)
console.log(level == 90); //number
// == is a loose comparisor
console.log(level == '90'); //string true
console.log(level != '90'); //false 
console.log(level != 90); //false


//Strict Comparison (Különfajta datatype nem lehet egyenlő)
console.log(level === 90);
console.log(level === '90'); //false
// === is a strict comparisor
console.log(level !== '90'); //true
console.log(level !== 90); //false
