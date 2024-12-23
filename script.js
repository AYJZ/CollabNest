// Manage Clubs and Students Log In/Sign Up

// Mock database for demonstration
const users = [];

function signUp(username, password, role) {
    if (!username || !password || !role) {
        alert("All fields are required.");
        return;
    }

    const userExists = users.some(user => user.username === username);

    if (userExists) {
        alert("Username already exists.");
        return;
    }

    users.push({ username, password, role });
    alert("Sign up successful!");
}

function logIn(username, password) {
    if (!username || !password) {
        alert("All fields are required.");
        return;
    }

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert(`Welcome back, ${user.username}!`);
    } else {
        alert("Invalid username or password.");
    }
}

// Attach functionality to the login/signup form (if present in HTML)
window.onload = () => {
    const signUpForm = document.getElementById('signUpForm');
    const logInForm = document.getElementById('logInForm');

    if (signUpForm) {
        signUpForm.onsubmit = (event) => {
            event.preventDefault();
            const username = document.getElementById('signUpUsername').value;
            const password = document.getElementById('signUpPassword').value;
            const role = document.querySelector('input[name="role"]:checked').value;
            signUp(username, password, role);
        };
    }

    if (logInForm) {
        logInForm.onsubmit = (event) => {
            event.preventDefault();
            const username = document.getElementById('logInUsername').value;
            const password = document.getElementById('logInPassword').value;
            logIn(username, password);
        };
    }
};
