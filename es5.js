//`Example 14
//Functions

function sayHello(name) {
	console.log(`say!! ${ name }`);
}

var sayHi = function (name) {
	console.log(`hey how are you! ${ name }`);
};

var resultOperation = function (value1, value2) {
	return value1 * value2;
};

sayHello(`david`);
sayHi(`hackro`);
console.log(`the result is ${ resultOperation(2, 3) }`);
