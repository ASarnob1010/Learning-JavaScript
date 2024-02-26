
//step 1 string

const name = "arnob Bokshi";
const age = 18;

console.log(`HELLO my name is ${name} and my age is :${age}`);
console.log(`Hello guys this is ${age} years old`); 

//step 2 string :
const Name = new String('ArnobBokshi')//it wont merge between the space 
console.log(Name[0]);
console.log(Name.trim());
console.log(Name.toLowerCase());
console.log(Name.charAt(2));
console.log(Name.indexOf('A'));
console.log(Name.substring(0,4));//last theke 1 ghom kon count hobe
console.log(Name.slice(1,-6));//accept -ve value where substring accept negative valuse as the beginning of the index
console.log(Name.length);

//step: 3 
const url = "https//:Arnob@gmail.com";
console.log(url.replace('@','vala'));
console.log(url.includes('K'));//kon specific jinish ase kina

//step: 4
console.log(Name.slice(-6,1));//accept neg value//return emtyp string
//A    r  n  o  b  B   o  k  s  h  i
//0    1  2  3  4  5   6  7  8  9  10
//-11 -10 -9 -8 -7 -6  -5 -4 -3 -2  -1

console.log(Name.substring(-6,-7));//sinc substring accept neg val as beginning index so 0,0
console.log(Name.slice(-6,-2));//-2 er ager ta print hobe
console.log(Name.length)
console.log(Name.substring(0,11));//