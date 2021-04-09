function validateEmail(email) {
    if (email == "") {
        document.getElementById("email-error").innerHTML = "Email is required.";
        document.getElementById("email-error").style.display = "block";
        return false;
    }

    document.getElementById("email-error").style.display = "none";
    return true;
}

export {
    validateEmail
};
