function displayInputValues() {
    var displayValues = "";

    var inputs = document.getElementsByTagName("input");
    for(var index = 0; index < inputs.length; index++) {
        var input = inputs[index];
        if (input.type != "submit") {
            displayValues = displayValues.concat(input.placeholder + ": " + input.value + " ");
        }
    }

    var submitValues = document.getElementById("submit-values");
    submitValues.innerHTML = displayValues;
    submitValues.style.display = "block";
}

function jsonPlaceholderRequest() {
    var email = document.getElementById("email").value;

    var url = "https://jsonplaceholder.typicode.com/users?email=" + email;
    fetch(url)
        .then((response) => response.json())
        .then((json) => console.log(json));
}
