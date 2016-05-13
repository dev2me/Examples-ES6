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

console.log(Man.sayHello());