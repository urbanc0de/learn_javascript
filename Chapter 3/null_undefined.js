//A különbség NULL és Undefined között az hogy:
//- a Null-nak direkt nincs értéke
//- az Undefined-nak pedig még nincs értéke

let level; //ez undefined
console.log(level, level + 2, `the level is ${level}`);

let levelNull = null; //ez null
console.log(levelNull, levelNull + 2, `the level is ${levelNull}`);
