//True / False
console.log(true,false);
//Booleans és összehasonlítás



//Metódusok vissza adnak booleant
let email = 'hardcoregamer@darksoul.com';
let names = ['Garrosh', 'Greymane', "Kel'thuzad"];


let resultIncludes = email.includes('@'); //megmutatja hogy igaz e hogy egy karakter megtalálható e a stringben
console.log(resultIncludes); 
let includesNames = names.includes('Greymane'); //Arrayen is működik
console.log(includesNames);



//Összehasonlító operátorok
let level = 110;
// == meaning: egyenlő e?
console.log(level == 25); // level egyenlő e 25el? false mert level 110

// != meaning: nem egyenlő?
console.log(level != 80); //ugye level nem egyenlő 80al? true

// > nagyobb?
console.log(level > 80);

// <= kisebb vagy egyenlő
console.log(level >= 120);

//-----------------------------------------
console.log('-----round 2----------')
//-----------------------------------------

let hero = 'thrall';
console.log(hero == 'Thrall'); 
console.log(hero == 'thrall'); 
console.log(hero > 'glock'); //ilyenkor abc szerint rendez és az alapján dönt mivan előbb
console.log(hero > 'thrall'); //a nagybetűs kisebb értékkel van mint a kis betűs
console.log(hero > 'Glock'); //ha kis nagy betű között megy a döntés az előbbi mint a abc sorrend
// cC > ABC 




