// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }


// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
let person1 = "arnob";
let person2 = "my queen";
if (userLoggedIn && debitCard && "2==2" ) {
    console.log(`allow ${person1} to buy the course`);
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log(`allow ${person2} to buy the course`);
}
