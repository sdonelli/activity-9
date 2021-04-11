/* Data for testing */
var users = [
    { email:"john@gmail.com", password:"12345678" },
    { email:"paul@outlook.com", password:"abcdefgh" }
];

window.addEventListener("load", function() {

    var form = document.querySelector("form");

    function login(event) {
        event.preventDefault();

        var emailValue = document.getElementById("email").value;  
        var passwordValue = document.getElementById("password").value;

        var submitValues = document.getElementById("submit-values");
        submitValues.innerHTML = "Email: " + emailValue + " Password: " + passwordValue;
        submitValues.style.display = "block";
        
        return isExistingUser();  
    }

    function isExistingUser() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
    
        for (var index = 0; index < users.length ; index++ ) {
            if (users[index].email === email && users[index].password === password) {
                console.log("It's a existing user.");
                return true;
            }
        }
    
        console.log("User doesn't exist.");
        return false;
    }

    var emailField = document.getElementById("email");
    emailField.addEventListener("blur", validateEmail);
    emailField.addEventListener("focus", removeEmailError);

    var passwordField = document.getElementById("password");
    passwordField.addEventListener("blur", validatePassword);
    passwordField.addEventListener("focus", removePasswordError);

    form.addEventListener("submit", login);
}); 
