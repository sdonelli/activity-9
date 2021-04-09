window.addEventListener("load", function() {

    var form = document.querySelector("form");
    
    function registerUser(event) {
        event.preventDefault();

        var isValidEmail = validateEmail();    
        var isValidFullName = validateFullName();
        var isValidPassword = validatePassword();
        var isValidConfirmPassword = validateConfirmPassword();
    
        if (isValidEmail && isValidFullName && isValidPassword && isValidConfirmPassword) {
            console.log("Register is success.");
        } else {
            console.log("Register is not success.");
        }
    }
        
    function validateFullName() {
        var fullNameValue = document.getElementById("full-name").value;

        var fullNameFormat = /^[A-Za-z]+\s+[A-Za-z]/;
        if (fullNameValue < 6) {
            document.getElementById("full-name-error").innerHTML = "Full name should have at least 6 characters.";
            document.getElementById("full-name-error").style.display = "block";
            return false;
        } else if (!fullNameValue.match(fullNameFormat)) {
            document.getElementById("full-name-error").innerHTML = "Full name should only contains letters and spaces.";
            document.getElementById("full-name-error").style.display = "block";
            return false;
        }
    
        document.getElementById("full-name-error").style.display = "none";
        return true;
    }
    
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
    
    function validateConfirmPassword() {
        var passwordValue = document.getElementById("password").value;  
        var confirmPasswordValue = document.getElementById("confirm-password").value;

        if (passwordValue != confirmPasswordValue) {
            document.getElementById("confirm-password-error").innerHTML = "Password and confirm password should match.";
            document.getElementById("confirm-password-error").style.display = "block";  
            return false;
        }
    
        document.getElementById("confirm-password-error").style.display = "none";  
        return true;
    }
    
    var emailField = document.getElementById("email");
    emailField.addEventListener("blur", validateEmail);

    var fullNameField = document.getElementById("full-name");
    fullNameField.addEventListener("blur", validateFullName);

    var passwordField = document.getElementById("password");
    passwordField.addEventListener("blur", validatePassword);

    var confirmPasswordField = document.getElementById("confirm-password");
    confirmPasswordField.addEventListener("blur", validateConfirmPassword)

    form.addEventListener("submit", registerUser);
});
