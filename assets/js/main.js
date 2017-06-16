console.log("hola");
//selector languaje

// Name and Email validation Function.
document.getElementById('enviar').addEventListener('click',validate);

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == " " && password == " ") {
        alert("Enter parametters");

    } else{
        alert("muy bien")
    }

}