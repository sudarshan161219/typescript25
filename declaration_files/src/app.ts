const user = AuthService.login("user", "password123");

if (AuthService.isLoggedIn()) {
  console.log("User is logged in");
} else {
  console.log("Login Failed");
}
