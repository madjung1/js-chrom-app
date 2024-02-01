const timer = document.querySelector("#clock");
let today = new Date();
function clock(){
    today = new Date;
    
    
    let hourPrint = String(today.getHours()).padStart(2,"0");
    let minPrint = String(today.getMinutes()).padStart(2,"0");
    let time = `${hourPrint}:${minPrint}`;
    timer.innerHTML= time;
};
setInterval(clock , 1000);
setTimeout(clock , 1000);