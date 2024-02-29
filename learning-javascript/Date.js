// Dates///it is a object
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);//in js month start with 0 index 0 means january
console.log(newDate.getDay());

//customized date
const formattedDate = newDate.toLocaleString('default', {
    weekday: "long",
});

console.log(formattedDate);
console.log(newDate.getDay());
