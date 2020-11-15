// -----If statements/állítások

const level = 110;

if(level > 90){ //akkor fut le ha true, vagyis level nagyobb mint x szám
    console.log("Congratulations! You've hit level 110!");
}

//Felépítés
//egy külső változót elemez
//booleannal true,false-al állít
//csak egyszer viszi le a codeblockot

const heroes = ['Illidan', 'Jaina', 'Arthas','Baine'];

if(heroes.length > 3){ //Ha heroes.length hoszabb mint 3elem, akkor fusson le a kód
console.log("Azeroth's Avengers");
}

console.log('-------part 2-------')
//hasznosabb példa pl, elég hosszú e a jelszó
const password = 'pass122124fasdf';

if(password.length >= 8){ //ha a password stringje nagyobb vagy egyenlő 8 karakterrel futassa a kódót
    console.log('that password is long enough!');
}else{//ha nem (vagy más)
 console.log('the password is not long enough!');
}//ha if nem true akkor az else-t futassa le


//----------ELSE IF Statements
//- Amikor több állítással dolgozuk
//Else if láncolás
if(password.length >= 12){
    console.log('that password is strong');
}else if(password.length >= 8){ //több if-et rakhatunk, például ha nem 12 karakter hosszú, akkor 8 karakter hosszú e
    console.log('that password is long enough!');
}else{
 console.log('the password is not long enough!');
}






