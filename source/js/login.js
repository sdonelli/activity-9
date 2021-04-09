/* Data for testing */
var users = [
    { email:"john@gmail.com", password:"12345678" },
    { email:"paul@outlook.com", password:"abcdefgh" }
];

window.addEventListener("load", function() {

    var form = document.querySelector("form");

    function validateEmail() {
        var emailValue = document.getElementById("email").value;

        var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!emailValue.match(emailFormat)) {
            document.getElementById("email-error").innerHTML = "Valid email is required.";
            document.getElementById("email-error").style.display = "block";
            return false;
        }
    
        document.getElementById("email-error").style.display = "none";
        return true;
    }

    function validatePassword() {
        var passwordValue = document.getElementById("password").value;
        
        var passwordFormat = /^[A-Za-z0-9]+/;
        if (!passwordValue.match(passwordFormat)) {
            document.getElementById("password-error").innerHTML = "Password can only contains letters and numbers.";
            document.getElementById("password-error").style.display = "block";
            return false;
        } else if (passwordValue.length < 8) {
            document.getElementById("password-error").innerHTML = "Password should have at least 8 characters.";
            document.getElementById("password-error").style.display = "block";
            return false;
        }
    
        document.getElementById("password-error").style.display = "none";
        return true;
    }

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

    var passwordField = document.getElementById("password");
    passwordField.addEventListener("blur", validatePassword);

    form.addEventListener("submit", login);
}); 
