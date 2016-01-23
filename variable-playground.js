// var person = {
// 	name: 'Andrew',
// 	age: 21
// };

// function updatePerson (obj) {
// 	obj.age = 24;
// }

// updatePerson(person);
// console.log(person);

//Array example

var grades = [15,20];

function newArray (array) {
	array = [15,20,25];
}

function updateArray (array) {
	array.push(25);
}

newArray(grades);
console.log(grades);
updateArray(grades);
console.log(grades);
