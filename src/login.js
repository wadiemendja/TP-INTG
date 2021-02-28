import { getConfig } from "./firebaseConfig.js";

// initializing database
const firebaseConfig = getConfig();
firebase.initializeApp(firebaseConfig);

const loginBtn = document.getElementById('login_btn');
const username = document.getElementById('username');
const frontPassword = document.getElementById('password');

// click listener 
loginBtn.addEventListener('click', (event) => {

    event.preventDefault();
    // loading 
    loginBtn.innerHTML = `
        <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    `;
    // disabeling inputs
    frontPassword.disabled = username.disabled = loginBtn.disabled = true;
    // appending data flow
    const newURL = new URL(location.href);
    newURL.searchParams.append('username', username.value);
    // login node 
    let loginRef = undefined;
    try {
        loginRef = firebase.database().ref('/users/' + username.value);
    } catch (e) {
        // invalid username
        
    }

    // getting all users
    loginRef.once('value', (snap) => {
        const password = snap.val().password;
        if (password == frontPassword.value) {
            // reading url 
            const url = location.href;
            location.href = "/" + getPath(url);
        }
    });
});

username.addEventListener('input', (event) => {
    event.target.style.borderColor = "";
});


frontPassword.addEventListener('input', (event) => {
    event.target.style.borderColor = "";
});

function getPath(string) {
    const index = string.indexOf('=');
    return string.substr(index + 1);
}