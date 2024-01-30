const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginWelcome = document.querySelector("#login-welcome");
const loginStatus = document.querySelector("#status");
const logoutBtn = document.querySelector("#status-user");
const main = document.querySelector("main")
const contentsPage = document.querySelector(".contents")

function loginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    console.log(userName);
    classControl();
    loginWelcome.innerHTML = `${userName} 님 어서오세요 ! `;

    
}
function classControl(){
    loginForm.classList.add("hidden");
    loginWelcome.classList.toggle("hidden");
    loginStatus.classList.toggle("hidden");
    main.classList.remove("need-login");
    main.classList.add("complete-login")
    contentsPage.classList.toggle("hidden");

}

// loginForm.addEventListener("submit", loginSubmit);

loginForm.onsubmit = loginSubmit;
