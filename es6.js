//`Example 18
//function arrow

/*var operation = function(value1,value2){
	console.log(`the result is ${value1 + value2}`);
}
operation(5,6);
*/

//using arrow
var operation = (value1,value2) => value1 + value2;
console.log(`the result is ${operation(5,9)}`);