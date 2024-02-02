const userName = document.querySelector("#user-name");
const userSubmit = document.querySelector("#user-submit");
const loginForm = document.querySelector("form");
const loginScreen = document.querySelector("#login-form");
const momentumScreen = document.querySelector("#momentum");
const greetText = document.querySelector("#greet");
var userId = null;
function idSave(event) {
    event.preventDefault();
    userId = userName.value;
    console.log(userId);
    idFnc.hidden(userId);
    idFnc.greet(userId);
    idFnc.setId(userId);
    
}
function idCheck(){
    userId = localStorage.getItem("userID");
    console.log(userId);
    if(userId===null){
        console.log(userId+"need login");
    }else{
        idFnc.hidden(userId);
        idFnc.greet(userId);
    }
}
const idFnc = {
    hidden : function(ID) {
        if (ID===null){
                console.log("null");
        }
        else{
                loginScreen.classList.toggle("hidden");
                momentumScreen.classList.toggle("hidden");
        }
    },
    greet : function(ID) {
        console.log(ID);
        greetText.innerHTML = `goodmoring${ID}`;
    },
    setId : function(ID){
        localStorage.setItem("userID",ID)
    }
};

idCheck();
loginForm.onsubmit = idSave;
