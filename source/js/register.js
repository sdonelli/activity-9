window.addEventListener("load", function() {

    var form = document.querySelector("form");
    
    function registerUser(event) {
        event.preventDefault();

        var isValidEmail = validateEmail();    
        var isValidFullName = validateFullName();
        var isValidPassword = validatePassword();
        var isValidConfirmPassword = validateConfirmPassword();
    
        if (isValidEmail && isValidFullName && isValidPassword && isValidConfirmPassword) {
            var headers = new Headers();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            
            fetch("http://localhost:4000/users/register", {
              method: 'POST',
              body: JSON.stringify(buildRegisterRequest()),
              headers: headers
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
        }

        displayInputValues();
        jsonPlaceholderRequest();
    }

    function buildRegisterRequest() {
        var emailValue = document.getElementById("email").value;
        var fullNameValue = document.getElementById("full-name").value;
        var passwordValue = document.getElementById("password").value;

        var request = {
            email: emailValue,
            fullName: fullNameValue,
            password: passwordValue,
        };

        return request;  
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
