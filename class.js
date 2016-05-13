//`Example 21


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