const loginForm = document.getElementById("loginForm");
const registrationForm = document.getElementById("registrationForm");

const checkLogin = (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "avinash" && password === "3009") {
        document.getElementById("loginMessage").innerText = "Login is valid!";
        document.getElementById("registration").style.display = "block";
    } else {
        document.getElementById("loginMessage").innerText = "Login is not valid.";
        document.getElementById("registration").style.display = "none";
    }
};

const registerStudent = (event) => {
    event.preventDefault();
    document.getElementById("registrationMessage").innerText = "Registration successful!";
};

loginForm.addEventListener("submit", checkLogin);
registrationForm.addEventListener("submit", registerStudent);