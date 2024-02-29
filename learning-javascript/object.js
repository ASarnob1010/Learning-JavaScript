// object 
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//sybol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

const mySym = Symbol("mykey1"); // Declare mySym as a symbol
const mysym2 = Symbol("myKey2");
const details = {
    name: "arnob",
    "full name": "arnob bokshi",
    ID: 2125051010,
    class: "hons",
    [mySym]: "mykey1",
    email: "abarnab@gmail.com",
    [mysym2] : '2',
};
console.log(details.name)
console.log(details["name"]);
//best use of access memeber variable
console.log(details["full name"]);
console.log(details[mySym]);
console.log(details[mysym2]);



// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting());

var my_obj = {
    name : "arnob",
}
var newname = function() {
console.log(`my name is : ${my_obj.name}`);
}
newname();