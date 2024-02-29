//specific thing i learned
array.push(), concate, spread , Array.from(element); Array.of(return a array from set of element)
/* const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
/* 
marvel_heros.push(dc_heros);//bad practice it will show arrays of array
console.log(marvel_heros);
console.log(marvel_heros[3][1]); */

//concate
//const all_heros = marvel_heros.concat(dc_heros);
//console.log(all_heros); 

const myhero = ["thanos", "shaktiman" , "kuddus"];
const nextheor = ["myfather ", "mymother" , "myQueen"];

/* const myallhero = myhero.concat(nextheor);
console.log(myallhero); */

//best practices (spread operator)
const all_heros = [...myhero,...nextheor];//merge array
console.log(all_heros);


console.log(Array.isArray("Arnob"))
console.log(Array.from("Arnob"))//making array
console.log(Array.from({name: "hitesh"})) // interesting
//didnt specify which specific thing i want to set as array


let round1 = 10;
let round2 = 20;
let round3 = 40;

console.log(Array.of(round1, round2 , round3));
