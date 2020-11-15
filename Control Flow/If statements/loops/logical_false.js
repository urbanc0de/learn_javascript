//------Logical NOT(!)
//Amikor azt akarjuk hogy akkor fusson le a kód ha FALSE
// ! - megváltoztatja a boolean értéket
let user = false;

//az if függvény csakis akkor fut le ha az állítás true
//mivel user = false ezért megfordítjuk az értéket, de attól még
//user false marad
if(!user){
    console.log('you must be logged in to continue')
}

