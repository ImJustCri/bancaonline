const usernameInput = document.getElementById("username") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const errorMessageElement = document.getElementById("error-message") as HTMLElement;

const users = [
    {
        username: "admin",
        password: "admin"
    },
    {
        username: "1",
        password: "1"
    }
];

let auth: boolean = false;

// if (!auth && window.location.pathname !== '/login') {
//     window.location.href = '../login';
// }

document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    errorMessageElement.textContent = '';

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        auth = true;
        window.location.href = '/en';

        const userLanguage = navigator.language;

        if (userLanguage.startsWith('it')) {
            window.location.href = '../it/';
        } else {
            window.location.href = '../en/';
        }

    } else {
        errorMessageElement.textContent = "Email o Password errati!";
        errorMessageElement.style.padding = '8px';
        errorMessageElement.style.borderRadius = '4px';
        errorMessageElement.style.background = 'red';
    }
});