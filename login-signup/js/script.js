document.querySelector("#create-account").onclick = function() {
    document.querySelector("#signup-form").classList.remove("hide");
    document.querySelector("#signup-form").classList.add("show");
    document.querySelector("#signup-form").classList.remove("show");
    document.querySelector("#login-form").classList.add("hide");
}

document.querySelector("#open-login").onclick = function() {
    document.querySelector("#signup-form").classList.remove("show");
    document.querySelector("#signup-form").classList.add("hide");
    document.querySelector("#login-form").classList.remove("hide");
    document.querySelector("#signup-form").classList.add("show");
}

var mobile_no = document.querySelector("#mobile-no");
var signup_password = document.querySelector("#signup-password");
document.querySelector("#signup-form form").onsubmit = function(e) {
    e.preventDefault();
    if (mobile_no.value.length < 10) {
        alert("Mobile number's length should be 10");
    }
    if (signup_password.value.length < 6) {
        alert("Password length too short");
    }
}