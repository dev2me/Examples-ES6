//Example 07
//Maps

var data = new Map();

//set properties
data.set("name", "david");
data.set("age", 19);
data.set("secondName", "hackro");
data.set("genere", true);

console.log(data);
console.log(data.get("name")); //get property
console.log(data.has("name")); //contain
data.delete("name"); //delete property
console.log(data.has("name"));
