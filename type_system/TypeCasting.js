"use strict";
//* Type Casting
let firstName = "Mark";
let lastName = "Doe";
//* user from API
let user = {
    name: "mark",
    email: "mark@email.com"
};
function fetchUser() {
    return user;
}
const fetchedUser = fetchUser();
