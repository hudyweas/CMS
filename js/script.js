function createUser(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function registerUser() {
    let email = document.querySelector(".reg-email");
    let psswd = document.querySelector(".reg-psswd");
    let psswdRepeat = document.querySelector(".reg-psswd-repeat");

    if (canRegister()) {
        createUser(email, psswd);
    }
}

//TODO:
function canRegister(email, psswd, psswdRepeat) {
    if (!isEmail(email)) {
        return false;
    }
    if (psswd != psswdRepeat) {
        return false;
    }
    return true;
}

function isEmail(email) {
    const re = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (re.test(email)) {
        return true;
    } else {
        return false;
    }
}
