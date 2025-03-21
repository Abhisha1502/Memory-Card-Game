function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[username]) {
        alert('Username already exists.');
    } else {
        users[username] = password;
        localStorage.setItem("users", JSON.stringify(users));
        alert('Registration successful. You can now login.');
        window.location.href = "main.html"; 
    }
}
