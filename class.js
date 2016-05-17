//`Example 21


class Man {
	get name() {
		return this._name;
	}
	set name(name) {
			this._name  = name;
	}
}
var david = new Man();
david.name = "hackro";
console.log(`youre name is ${david.name}`);