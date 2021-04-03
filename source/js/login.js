/* Data for testing */
var users = [
    { email:"john@gmail.com", password:"12345678" },
    { email:"paul@outlook.com", password:"abcdefgh" }
];

function login() {   
    return isExistingUser();  
}

function isExistingUser() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    for (var index = 0; index < users.length ; index++ ) {
        if (users[index].email === email && users[index].password === password) {
            console.log("It's a existing user.");
            document.getElementById('login-not-success').style.display = "none";
            return true;
        }
    }

    console.log("User doesn't exist.");
    document.getElementById('login-not-success').style.display = "block";
    return false;
}
