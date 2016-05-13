class man{
	
	constructor(name,age){
		this.name = name;
		this.age = age;
	}

	sayHello(){
			return `Hello! ${this.name}`;
	}

	static sayBye()
	{
		return `Bye!`;
	}
}

var Man = new man("david",8);

console.log(Man.sayHello());
console.log(man.sayBye());