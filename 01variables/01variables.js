const accountId = 123556;
let accountEmail = "john.doe@example.com";
var accoundPassword = "password123";
acountCity = "New York";

{
    // scope of variables
}


// accountId = 2; now allowed to change
accountEmail = "this@email.com"

// console.log(accountId)
// console.log(accountEmail)

/*
prefer not to use var becuse of issue block scope
*/

console.table([accoundPassword, acountCity, accountEmail])