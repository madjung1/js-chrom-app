const userName = document.querySelector("#user-name");
const userSubmit = document.querySelector("#user-submit");
const loginForm = document.querySelector("form");
const loginScreen = document.querySelector("#login-form");
const momentumScreen = document.querySelector("#momentum");
const greetText = document.querySelector("#greet");
var userId = "";
function namesave(event) {
    event.preventDefault();
    const userId = userName.value;
    console.log(userId);
    if (userId===null)
        {
            console.log("null");
        }
    else{
        greet(userId);
        loginScreen.classList.toggle("hidden");
        momentumScreen.classList.toggle("hidden");
        
    }
}
function greet(name) {
    console.log(name);
    greetText.innerHTML = `goodmoring${name}`;
}

loginForm.onsubmit = namesave;
