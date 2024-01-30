const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginWelcome = document.querySelector("#login-welcome");
const loginStatus = document.querySelector("#status");
const logoutBtn = document.querySelector("#status-user");
const main = document.querySelector("main")
const contentsPage = document.querySelector(".contents")
const clock = document.querySelector("#clock");
let today = new Date();


function loginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    console.log(userName);
    classControl();
    timeCheck();
    
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


function clockFnc(){
    
    today = new Date;
    let hour = today.getHours();
    let min = today.getMinutes();
    hour = hour.toString();
    min = min.toString();
    const hourPrint = hour.padStart(2,0);
    const minPrint = min.padStart(2,0);
    let time = `${hourPrint}:${minPrint}`;
    clock.innerHTML= time
};
function timeCheck(){
    const userName = loginInput.value;
    if(6<today.getHours()&&12>today.getHours()){
        loginWelcome.innerHTML = `${userName} ! Good Moring ! `;
    }else if(12<today.getHours()&&18>today.getHours()){
        loginWelcome.innerHTML = `${userName} ! Good Aftternoon ! `;
    }else if(18<today.getHours()&&24>today.getHours()){
        loginWelcome.innerHTML = `${userName} ! Good Evening ! `;
    }else{
        loginWelcome.innerHTML = `${userName} ! Good Night ! `;
    }
}
//setInterval(clockFnc , 1000);
setTimeout(clockFnc , 1000);