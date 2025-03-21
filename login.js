function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[username] && users[username] === password) {
        window.location.href = "main.html"; 
    } else {
        alert('Invalid username or password.');
    }
}