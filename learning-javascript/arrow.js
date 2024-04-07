const welcomeMsg = {
    name :"Arnob",
    id : 12010,
    welcomemsg  : function() {
    console.log(`${this.name} , welcome to website`);
    console.log(this);
    }
}
welcomeMsg.welcomemsg();
welcomeMsg.name = "boka";
welcomeMsg.welcomemsg();


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//arrow function
/* const chai = () => {
   let username = "arnob";
   console.log(username)
}
chai() */


//two ways of return value
// const addTwo = (num1, num2) => {
//     return num1 + num2 }

const addthree = (num1,num2,num3)=>{
  let sumofthree = num1+num2+num3;
  console.log(sumofthree)
}
addthree(1,5,6);
//another way
const addthree = (num1,num2,num3) => num1+num2+num3;
console.log(addthree(1,2,3))


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )


const practice = (string1, string2) => {
    return (string1.concat(string2).trim());
}

const result = practice("Arnob", "  Bokshi");
console.log(result);
