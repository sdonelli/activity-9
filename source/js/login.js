window.addEventListener("load", function() {

    var form = document.querySelector("form");

    function login(event) {
        event.preventDefault();

        displayInputValues();

        var emailValue = document.getElementById("email").value;
        var passwordValue = document.getElementById("password").value;

        var headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
            
        fetch("http://localhost:4000/login", {
          method: 'PUT',
          body: JSON.stringify({ email: emailValue, password: passwordValue }),
          headers: headers
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

        jsonPlaceholderRequest();
    }

    var emailField = document.getElementById("email");
    emailField.addEventListener("blur", validateEmail);
    emailField.addEventListener("focus", removeEmailError);

    var passwordField = document.getElementById("password");
    passwordField.addEventListener("blur", validatePassword);
    passwordField.addEventListener("focus", removePasswordError);

    form.addEventListener("submit", login);
}); 
