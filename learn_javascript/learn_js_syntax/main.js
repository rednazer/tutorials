///////////////////////////////////////////////////////////////
// Learn basic javascript syntax (I already knew most of this)
///////////////////////////////////////////////////////////////
// const name = 'Zander';
// const age = 21;
// const gender = 'Male';

// const fruits = ["grapes", "apple", "orange"];
// // fruits = [] YOU CAN'T DO THIS
// fruits[3] = "mangos";           // Sets location (or adds new element)
// fruits.push("pears");           // Adds to end
// fruits.unshift("strawberries"); // Adds to beginning
// //console.log(fruits.pop());      // Takes off top
// fruits[10] = "something?";
// //console.log(fruits);

// //console.log(Array.isArray(fruits)); // There are a bunch of array methods that can be used.

// const me = {
//   firstname: 'Zander',
//   lastname: 'Huang',
//   age: 21,
//   hobbies: ['gaming', 'web dev (lol)', 'twitch chat lurking'],
// }
// me.email = "zander@mail.com" // Fake btw

// const todo = [
//   {
//     id: 1,
//     text: 'Cry',
//     isDone: true,
//   },
//   {
//     id: 2,
//     text: 'Game',
//     isDone: false,
//  },
//  {
//    id: 3,
//    text: 'Cry again',
//    isDone: true,
//  },
//];

// const todoJSON = JSON.stringify(todo);
// console.log(todoJSON);

//for(let item of todo){
//  console.log(item);
//}

// Same as enhanced for loop
//todo.forEach(
//  function(item){
//    console.log(item);
//  }
//)

// maps array to a new array
//const todoText = todo.map(function(item){
//  return item.text;
//})
//console.log(todoText);

// Filters out content that does not fit criteria
//const todoCompleted = todo.filter(function(todo){
//  return todo.isDone == true;
//}).map(function(todo){ return todo.text;});
//console.log(todoCompleted);

//const x = 5;
//let y;
//y = (x > 5) ? 'red' : 'blue';
//console.log(y);
//switch(y) {
//  case 'red':
//    console.log("That pretty red there my man");
//    break;
//  case 'blue':
//    console.log("The blue men group");
//    break;
//  default:
//    console.log("none of the above");
//    break;
//}

// Can use arrow notation? to define a function and speed up the definition
//function addNums(num1 = 0, num2 = 0) {return num1 + num2;}
//const addNums = (num1 = 0, num2 = 0) => { return num1 + num2; }
//const addNums = (num1 = 0, num2 = 0) => num1 + num2;
//console.log(addNums(1, 2));

// Functional programming way of doing constructor (sort of like classes)
//function Person(name, dob) {
//  this.name =name;
//  this.dob = new Date(dob);
//}

//p1.getBirthYear = function() { // Its messed up that you can do this
//  return this.dob.getFullYear();
//}

// Object oriented way of doing constructor
//class Person {
//  constructor(name, dob) {
//    this.name = name;
//    this.dob = new Date(dob);
//  }

//  getBirthYear() {
//    return this.dob.getFullYear();
//  }
//}

//const p1 = new Person('ZH', 01/12/2000);
//console.log(p1);

