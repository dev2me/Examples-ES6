//`Example 21


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