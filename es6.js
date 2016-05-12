//Example 08
//set - conjunto



var peoples = new Set();

//add properties
peoples.add("david"); 
peoples.add("mayra");
peoples.add("karina");
peoples.add("jacky");
peoples.add(456465);
//peoples.add("jacky");//-->o it's possible properties similars



console.log(peoples);

//search property
console.log(peoples.has("david"));

//show size
console.log(peoples.size);

//delete property
peoples.delete("david");

console.log(peoples);