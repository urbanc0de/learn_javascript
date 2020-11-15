//-----FOR LOOPS

//Néha tudjuk hányszor akarunk végig menni, pl. 5x
console.log('1-Megadott számú loop');
for (let index = 0; index < 5; index++) {
    //codeblock
    console.log('in loop:', index);
} //for loopnál nincs ; végén
console.log('loop finished');
//Felépítés
//(let index = 0;) = számláló, megadja hányszor megy végig a loop
// index < 5; = condition, megállapítás, ha ez az állítás igaz, akkor elkezdi végbe vinni a loopot (codeblock) amég pl eléri index az 5öt
// index++ = miután lefutott a kód, hozzáad az indexhez 1et így index = 1 és lefut újra a loop, és újra és újra


//De a legtöbbször nem tudjuk, ezért adatok.length-jén megyünk végig
console.log('2-Megadott adat.length loop');
const nevek = ['Thrall', 'Goel', 'Sylvanas'];
//- nevek kiírása
for (let index = 0; index < nevek.length; index++) {
    //a nevek.length-en fut végig és leáll ha elfogy az adat
    console.log(nevek[index]); //nevek.lengthen keresztül az pozícióhoz tartozó neveket írja ki

}
//-html template
for (let index = 0; index < nevek.length; index++) {
    let html = `<div>${nevek[index]}</div>`; //ahányszor végig megy a neveken a loop, html template divekbe rakja a neveket, új-új sorba
    console.log(html);
}

for (let index = 0; index < nevek.length; index++) {
    let html = `<div>${nevek[index]}</div>`; //ahányszor végig megy a neveken a loop, html template divekbe rakja a neveket, új-új sorba
    console.log(html);
}//Iteration = 1 kör lefutott codeblock a loopban



