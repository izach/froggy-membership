var utility = require("./lib/utility");

utility.sayHi();

var user = require("./lib/users");
var otherUser = require("./lib/users");

console.log(user.getName());
console.log(otherUser.getName());

user.setName("Steve");
console.log(otherUser.getName());