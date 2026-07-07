
let eye1 = document.getElementById("eye1");
let eye2 = document.getElementById("eye2");

let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

eye1.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        eye1.classList.replace("fa-eye", "fa-eye-slash");

    } else {

        password.type = "password";
        eye1.classList.replace("fa-eye-slash", "fa-eye");

    }

});

eye2.addEventListener("click", function () {

    if (confirmPassword.type === "password") {

        confirmPassword.type = "text";
        eye2.classList.replace("fa-eye", "fa-eye-slash");

    } else {

        confirmPassword.type = "password";
        eye2.classList.replace("fa-eye-slash", "fa-eye");

    }

});


// Register

let form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = password.value;
    let confirm = confirmPassword.value;

    if (pass !== confirm) {

        alert("Passwords do not match.");
        return;

    }

    let user = {

        name: name,
        email: email,
        password: pass

    };

    localStorage.setItem("user", JSON.stringify(user));

    document.getElementById("popup").style.display = "flex";

});

function goLogin() {

    window.location.href = "../login/index.html";

}