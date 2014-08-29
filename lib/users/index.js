// Shopping cart
var items = [];

exports.addItem = function(item){
	items.push(item);
};
exports.getName = function(){
	return items;
};

// User
var name = "Rob";

exports.getName = function(){
	return name;
};

exports.setName = function(newName){
	name = newName;
};