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

        displayInputValues();
        jsonPlaceholderRequest();
    }
        
    var emailField = document.getElementById("email");
    emailField.addEventListener("blur", validateEmail);
    emailField.addEventListener("focus", removeEmailError);

    var fullNameField = document.getElementById("full-name");
    fullNameField.addEventListener("blur", validateFullName);
    fullNameField.addEventListener("focus", removeFullNameError);

    var passwordField = document.getElementById("password");
    passwordField.addEventListener("blur", validatePassword);
    passwordField.addEventListener("focus", removePasswordError);

    var confirmPasswordField = document.getElementById("confirm-password");
    confirmPasswordField.addEventListener("blur", validateConfirmPassword)
    confirmPasswordField.addEventListener("focus", removeConfirmPasswordError);

    form.addEventListener("submit", registerUser);
});
