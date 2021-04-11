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
