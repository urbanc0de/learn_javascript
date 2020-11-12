// -- Number Datatype
let radius = 10;
const pi = 3.14;
// Math operators:
// + összeadás
// - kivonás
// * szorzás
// / osztás
// ** kitevő
// % maradékos osztás

console.log(10 / 2);
let result = pi * radius**2; //változóba rakja a művelet eredményét
console.log(result);
//order of operation - B I D MA S
// 1. Brackets - zárójel
// 2. I - számra emelés
// 3. Division - osztás
// 4. Multiply - szorzás
// 5. A - összeadés
// 6- S

// ---SHORTHANDS___lazyfuck...
let likes = 10;
//likes--;
//likes++; //shorthand 1 hozzáadáshoz (likes = likes + 1;)
//likes += 10; //shorthand akármilyen hozzáadáshoz
//likes -= 5; //elvesz 5öt
//likes *= 2; szorozza 2 vel
//likes /= 2; elossza 2vel
console.log(likes);
//...

// NaN - not a number
// console.log(2 * 'fuck'); NaN lesz mert string nem szám

let outcome = 'this has ' + likes +' likes'; // ezzel lehet string közé számokat íratni ki(ELAVULT)
console.log(outcome);


// Template String
const title = 'Best Game of 2020';
const developer = 'Naughty Dog';
const heart = 100;

//Concetation way
let final = 'the blog called ' + title + ' by ' + developer + ' has ' + heart + ' heart';
console.log(final); //elavult módszer
//Template string way Modern approach
let solution = `The blog called ${title} by ${developer} has ${heart} likes`;
console.log(solution);

//Creating HTML template
let html = 
`
 <h2>${title}</h2>
 <p>By ${developer}</p>
 <span>This blog has ${heart} likes</span>
`;
console.log(html);




