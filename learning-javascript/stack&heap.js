//stack memeory contains primitive type member whereas heap contains non-pritive type reference type 
// so whatever we try to change in stack memory it gives a copy to it and in heaps the the var get 
//the reference of the same address

//stack memory ex: 
let abc = 23
console.log(abc)
let x = abc;
console.log(x)
x = 32
console.log(x);

var myobj = {
    name: "arnob",
    id: 10,
    phonenumber: 122223
};

var changeobj = myobj;
changeobj.name  = "kuddus",
console.log(myobj.name);
//it changes the name of myobj
