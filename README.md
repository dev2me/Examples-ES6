# Examples ES6



###1.0 Hello World ES6

```javascript
    let saludo = 'Hola Mundo';

    console.log(saludo);
```



###1.1 Values
  ```javascript

    let cadena = 'Tutorials Hackro';
    let integer = 2;
    let double = 19.5;
    let boolean = true;
    
    console.log(cadena);
    console.log(integer);
    console.log(double);
    console.log(boolean);
   ``` 
    
###1.2 Arithmetic operators
```javascript

    // + - * / %
    let integer = 2;
    let double = 10;
    
    
    console.log(integer + (double * integer));
    console.log(integer % (double * integer));
```
###1.3 Unary operators

```javascript

    console.log(typeof 4);
    console.log(-(10-8));
```
  
###1.4 Logical operators

  ```javascript
  
    console.log(5 == 1);
    console.log(5 <= 1);
    console.log(5 < 1);
    console.log(5 > 1);
    console.log(5 >= 1);
    console.log(5 == 1 && 4 > 6);
    console.log(5 < 1 || 5 == 5);
    
    
    
    /*
    == igual
    != diferente
    <  menor que 
    <= meyor igual
    >  mayor que
    >= mayor igual
    %% and
    || or
    !  not
    */
  ```
###1.5 Variables & Constants

  ```javascript

    var secondName = "HACKRO";
    let age = 19;
    const Name = "David"
    
    secondName = "hackro"
    age = 0;
    //Name = "paulina"; //--No it's possible change value const
    console.log(Name + secondName + age);
  ```
###1.6 Arrays
  ```javascript

    var names = new Array("david","mayra");
    console.log(names);
    
    names.push("jacky");
    console.log(names);
    
    names.pop();
    console.log(names);
    
    console.log(names[0]);
```
###1.7 Maps
   ```javascript

    var data = new Map();
    
    //set properties
    data.set("name","david");
    data.set("age",19);
    data.set("secondName","hackro");
    data.set("genere",true);
    
    console.log(data);
    console.log(data.get("name"));//get property
    console.log(data.has("name"));//contain 
    data.delete("name");//delete property
    console.log(data.has("name"));
```
###1.8 Set
  ```javascript
  
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
```
###1.9 Destructuring assignment
```javascript

    var peoples = new Array("david","hackro");
    //without destructuring
    /*
    var firstPeople = peoples[0];
    var secondPeople = peoples[1];
    */
    //with destructuring
    var [firstPeople,secondPeople] = peoples;
    
    console.log(firstPeople,secondPeople);
```
###1.10 Variables Block

```javascript

    /*
    let = exist in block
    var = global
    */
    
    var age;
    
    function say(){
    	let name = "david hackro";
    		  console.log(`hey!! ${name}`);
    
    }
    	  console.log(`hey!! ${name}`);
    
    say();
    
    for(var i = 0; i < 10;i++){
    		  console.log(`value ${i}`);
    }

```
###1.11 loop For
```javascript

    
    for(let i = 1; i < 10; i+=i)
    {
    	console.log(i); 
    }
```
###1.12 Loop For of
  ```javascript

    var languajes = new Array("java","Ruby","Python");
    
    for(let languaje of languajes)
    {
    	console.log(languaje); 
    }
```

###1.13 While
```javascript

    var age = 19;
    while(age <= 20){
    	age++;
    console.log(`${age}`);
    }
```

###1.14  Functions
```javascript

    function sayHello(name)
    {
    		console.log(`say!! ${name}`)
    }
    
    
    var sayHi = function(name)
    {
    	console.log(`hey how are you! ${name}`);
    }
    
    
    var resultOperation = function(value1,value2){
    	return value1 * value2;
    }
    
    sayHello(`david`);
    sayHi(`hackro`);
    console.log(`the result is ${resultOperation(2,3)}`);
```
###1.15 Default values parameters 
```javascript

    function people(name ="david",age="19"){
    	console.log(`Hello my name is ${name} and i have ${age} years old`);
    }
    people();
```
###1.16 Parameters Spread
```javascript

    function devices(type,name,brand){
    console.log(`the device ${type} is ${name} and ${brand}`);
    }
    
    var cellphone = new Array("small","zt","sony");
    devices(...cellphone);
```

###1.17 Parameters Rest
```javascript

    function names(... collectionNames){
    	for(let name of collectionNames)
    		console.log(name);
    }
    
    names("david","hackro");
```
###1.18 Arrow Functions
```javascript

    /*var operation = function(value1,value2){
    	console.log(`the result is ${value1 + value2}`);
    }
    operation(5,6);
    */
    
    //using arrow
    var operation = (value1,value2) => value1 + value2;
    console.log(`the result is ${operation(5,9)}`);
```
###1.19 Class
```javascript

    class man{
    	constructor(name,age){
    		this.name = name;
    		this.age = age;
    	}
    
    }
    
    var Man = new man("david",8);
    
    console.log(Man);
```
###1.20 Methods
```javascript

    class man{
    	constructor(name,age){
    		this.name = name;
    		this.age = age;
    	}
    
    	sayHello(){
    			return `Hello! ${this.name}`;
    	}
    
    }
    
    var Man = new man("david",8);
```
###1.21 Inheritance
```javascript

    
 
class man{
	
	constructor(name,age){
		this.name = name;
		this.age = age;
	}

	sayHello(){
			return `Hello! ${this.name}`;
	}

	static sayBye(){
		return `Bye!`;
	}
}

//var Man = new man("david",8);


class children extends man{

	constructor(name,age){
		super(name,age);
		this.name = "hackro";
		this.age = 24;
	}

	sayInformation(){
		return `hello my name is ${this.name} and i have ${this.age} years old`;
	}
} 

var boy = new children("mayra",24);
console.log(boy.sayHello());
console.log(boy.sayInformation());
Status API Training Shop Blog About

```
####1.22 Set & Get
```javascript
    		
    class man{
    
    	get name(){
    		return this._name;
    	}
    
    	set name(name){
    			this._name  = name;
    	}
    
    }
    
    
    var david = new man();
    david.name = "hackro";
    console.log(`youre name is ${david.name}`);
    		this.name = "hackro";
    		this.age = 24;
    	}
    
    	sayInformation(){
    		return `hello my name is ${this.name} and i have ${this.age} years old`;
    	}
    } 
    
    var boy = new children("mayra",24);
    console.log(boy.sayHello());
    console.log(boy.sayInformation());
```
