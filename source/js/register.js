function registerUser() {
    var email = document.getElementById("email").value;
    var isValidEmail = validateEmail(email);

    var fullName = document.getElementById("full-name").value;
    var isValidFullName = validateFullName(fullName);

    var password = document.getElementById("password").value;
    var isValidPassword = validatePassword(password);

    var confirmPassword = document.getElementById("confirm-password").value;
    var isValidConfirmPassword = validateConfirmPassword(confirmPassword);

    var areMatchedPasswords = false;
    if (isValidPassword && isValidConfirmPassword) {
        areMatchedPasswords = areSamePassword(password, confirmPassword);
    }

    if (isValidEmail && isValidFullName 
        && isValidPassword && isValidConfirmPassword && areMatchedPasswords) {
        console.log("Register is success.");
    } else {
        console.log("Register is not success.");
    }
}

function validateEmail(email) {
    if (email == "") {
        document.getElementById("email-error").innerHTML = "Email is required.";
        document.getElementById("email-error").style.display = "block";
        return false;
    }

    document.getElementById("email-error").style.display = "none";
    return true;
}

function validateFullName(fullName) {
    if (fullName == "") {
        document.getElementById("full-name-error").innerHTML = "Full name is required.";
        document.getElementById("full-name-error").style.display = "block";
        return false;
    } else if (!fullName.match(/^[A-Za-z]+$/)) {
        document.getElementById("full-name-error").innerHTML = "Full name should only contains letters.";
        document.getElementById("full-name-error").style.display = "block";
        return false;
    }

    document.getElementById("full-name-error").style.display = "none";
    return true;
}

function validatePassword(password) {
    if (password == "") {
        document.getElementById("password-error").innerHTML = "Password is required.";
        document.getElementById("password-error").style.display = "block";
        return false;
    } else if (password.length < 8) {
        document.getElementById("password-error").innerHTML = "Password should have at least 8 characters.";
        document.getElementById("password-error").style.display = "block";
        return false;
    }

    document.getElementById("password-error").style.display = "none";
    return true;
}

function validateConfirmPassword(confirmPassword) {
    if (confirmPassword == "") {
        document.getElementById("confirm-password-error").innerHTML = "Confirm password is required.";
        document.getElementById("confirm-password-error").style.display = "block";
        return false;
    } else if (confirmPassword.length < 8) {
        document.getElementById("confirm-password-error").innerHTML = "Confirm password should have at least 8 characters.";
        document.getElementById("confirm-password-error").style.display = "block";
        return false;
    }

    document.getElementById("confirm-password-error").style.display = "none";
    return true;
}

function areSamePassword(password, confirmPassword) {
    if (password != confirmPassword) {
        document.getElementById("confirm-password-error").innerHTML = "Password and confirm password should match.";
        document.getElementById("confirm-password-error").style.display = "block";  
        return false;
    }

    document.getElementById("confirm-password-error").style.display = "none";  
    return true;
}
