//`Example 17
//parameters rest


function names(... collectionNames){
	for(let name of collectionNames)
		console.log(name);
}

names("david","hackro");