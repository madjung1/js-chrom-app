const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginWelcome = document.querySelector("#login-welcome");

function loginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    console.log(userName);
    loginForm.classList.add("hidden");
    loginWelcome.classList.toggle("hidden");
    loginWelcome.innerHTML = `${userName} 님 어서오세요 ! `;

    
}

// loginForm.addEventListener("submit", loginSubmit);

loginForm.onsubmit = loginSubmit;