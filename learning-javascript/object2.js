// const tinderUser = new Object()  //singleton method
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//obj of obj
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Arnob",
            lastname: "Bokshi"
        }
    }
}


const myvar = {
    name : "arnob",
    fullname : {
        firstname : 'Bokshi',
        lastname : 'arnob',
    },
}
console.log(myvar.fullname.firstname);
// console.log(regularU,ser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);




const a ={c:30,d:40};
const b ={a:10,b:20};
const c = {...a,...b};
console.log(c);


const hello = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "Arnob",
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[//jsn
    {},
    {},
    {}
]

const hero = {
    name : "shaktiman",
    id : 12212,
}

const {name : n} = hero;
console.log(n);

var herotwo = {
    name : "myqueen",
    wing : "two",
    id : 1212
}
console.log(Object.values(herotwo));
const {name : neww} = herotwo;
console.log(neww);


var myfavhero  = {
    name : "Arnob Bokshi",
    id : 10,
    age : 23,
    personaldetails  : {
    "full-name" : "a",
    "address ": "paiproad",
    }
}
console.log(myfavhero.personaldetails["full-name"]);
console.log(Object.values(myfavhero));

//imediatly invoked function

(function arnob(){
    console.lof('DB connected');
})();

( (Name)=>{
console.log(`this is : ${Name}`);
})('arnob');
