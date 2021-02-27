import { getConfig } from "./firebaseConfig.js";

// initializing database
const firebaseConfig = getConfig();
firebase.initializeApp(firebaseConfig);

// checking user input


const loginBtn = document.getElementById('login_btn');

loginBtn.addEventListener('click', (event) => {

    event.preventDefault();
    // getting username and password
    const username = document.getElementById('username').value;
    const frontPassword = document.getElementById('password').value;
    // login node 
    const loginRef = firebase.database().ref('/users/' + username);

    // getting all users
    loginRef.once('value', (snap) => {
        const password = snap.val().password;
        console.log(password);
        if (password == frontPassword) {
            // reading url 
            const url = location.href;
            location.href = "/" + getPath(url);
        }
    });
});

function getPath(string) {
    const index = string.indexOf('?');
    return string.substr(index + 1);
}