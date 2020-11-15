//_________While LOOPS

// let index = 0; //variable
// while(index < 5) {
//     console.log('in loop: ', index);
//} ez egy végtelen loop, mivel index = 0; a while függvénynek pedig az van megadva hogy
//addig fusson amég az index kisebb mint 5, ezért örökre futni fog a.k.a Infinite Loop


//--Felépítés
//-csak condition van a loop argumentjében megadva pl.:(index < 5)ű
//a variable-t(változót) kívül fogalmazzuk meg
//a codeblockon belül adjuk hozzá a számlálót hogy minden lefutott codeblock elérje a megadott while értéket így nem lesz infinite

let index = 0; //variable
while(index < 5) {
    console.log('in loop: ', index);
    index++;
}

//-----While loop, Römbökket, Arrayel
const names = ['Garrosh', 'Syndragosa', 'Grom'];
let i = 0;
while(i < names.length){
    console.log(names[i]); //ki írja a neveket amég a nevek.length elnem fogy
    i++;
}