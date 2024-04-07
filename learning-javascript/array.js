//  const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"] 

myArr.unshift(9)//goes beginning of the array element
myArr.shift();//remove first element
//Array methods
// push(), pop() , unshift() ,shift() ,slice(), splice()
// myArr.push(6)
// myArr.push(7)
/* myArr.pop()//elemenated last element
console.log(myArr);


console.log(myArr) */
/* console.log(myArr[1]);
console.log(myArr.indexOf(3));
console.log(myArr);
console.log( newArr);
 */
//console.log(myArr.includes(9));//check whether a element present or not

// slice, splice 

//slice [ last index not included ]
var arr = [1,2,3,4,5,6];
console.log(arr);
var arrmod = arr
console.log(arrmod.slice(1,3));//2 3
console.log(arr);
console.log(arrmod); //no changes in main array using slice 

//splice (include all element but made changes in main array)
var arr1 = [1,2,3,4,5,6];
console.log(arr1);
var myArr = arr1;
//now using splice
console.log(myArr.splice(1,3));//2 3 4
console.log(myArr);//1 5 6//change made in main array
console.log(arr1);//1 5 6