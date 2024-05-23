const accountId = 144553
let accountEmail = "rututaj@google.com"
var accountPassword = "12345"
accountCity = "Kolhapur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ruturaj@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])