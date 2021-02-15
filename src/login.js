import { getConfig } from "./firebaseConfig.js";

// initializing database
const firebaseConfig = getConfig();
firebase.initializeApp(firebaseConfig);

// login node 
const loginRef = firebase.database().ref('/login');

// getting all users
loginRef.once('value', (snap) => {
    let users = snap.val();
    for (let i in users) {
        checkUser(users[i]);
    }
});


// checking user input
function checkUser(user) {

    const loginBtn = document.getElementById('login_btn');

    loginBtn.addEventListener('click', () => {
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        if (username == user.username) {

        } else if (password == user.password) {

        }
    });


}
