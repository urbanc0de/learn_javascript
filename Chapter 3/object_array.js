//---- OBJECTS: ARRAYS

//array syntax
let champions = ['Ragnar',
                 'Lothar',
                 'Genn',
                 'Garrosh' ];

console.log(champions);
champions[1] = 'Anduin'; //overwrites position 1
console.log(champions[1]); //gets position 1 element

let levels = [24,85,110,90];

//--Propeties, Methods

console.log(champions.length); //the number of elements

let resultJoin = champions.join(','); //egy stringgé alakítja őket és vesszővel elválasztja
console.log(resultJoin);

let resultIndexOf = champions.indexOf('Genn'); //megkerersi a Genn pozícióját
console.log(resultIndexOf);

let resultConcat = champions.concat(['Tyrande', 'Bolvar']) //Összekapcsol 2 array-t
console.log(resultConcat);

let resultPush = champions.push('Thrall'); //Hozzáad egy új elementet és megadja a length hosszát
console.log(resultPush);

let resultPop = champions.pop(); //leveszi az utolsó array elementet és kiírja
console.log(resultPop);

