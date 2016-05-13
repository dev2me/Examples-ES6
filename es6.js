//Example 09
//Destructuring assignment


var peoples = new Array("david","hackro");
//without destructuring
/*
var firstPeople = peoples[0];
var secondPeople = peoples[1];
*/
//with destructuring
var [firstPeople,secondPeople] = peoples;

console.log(firstPeople,secondPeople);