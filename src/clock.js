const clock = document.querySelector("#clock");
let today = new Date();


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
//setInterval(clockFnc , 1000);
setTimeout(clockFnc , 1000);