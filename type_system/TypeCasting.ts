//* Type Casting

let  firstName = <any> "Mark"
let  lastName = "Doe" as any

//* user from API
let user = {
   name: "mark",
   email:"mark@email.com"
}

type User = {
   name: string,
   email: string
}

function fetchUser () {
return user as User
}


const fetchedUser = fetchUser()