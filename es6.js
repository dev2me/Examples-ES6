//`Example 16
//parameters spread

function devices(type,name,brand){
console.log(`the device ${type} is ${name} and ${brand}`);
}

var cellphone = new Array("small","zt","sony");
devices(...cellphone);
