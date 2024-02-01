const timer = document.querySelector("#clock");
let today = new Date();
let year = today.getFullYear();
let dDay = new Date(year, 11, 25, 0, 0, 0);
let difTime = Math.floor(dDay.getTime()/1000)-Math.floor(today.getTime()/1000)
function yearCheck(){
    if(difTime<0){
        
        dDay = new Date(year+1, 11, 25, 0, 0, 0);
        
    }else{
        
    }
};
function clock(){
    yearCheck();
    today = new Date;
    difTime = Math.floor(dDay.getTime()/1000)-Math.floor(today.getTime()/1000);
    let difSec = difTime % 60;
    let difMin = Math.floor(difTime/60);
    let difHour = Math.floor(difMin/60);
    difMin = difMin % 60;
    let difDay = Math.floor(difHour/24);
    difHour = difHour % 24;

    difHour = difHour.toString();
    difMin = difMin.toString();
    difSec = difSec.toString();
    const hourPrint = difHour.padStart(2,0);
    const minPrint = difMin.padStart(2,0);
    const secPrint = difSec.padStart(2,0);

    let dDayCount = `${difDay}d ${hourPrint}h ${minPrint}m ${secPrint}s`;
    timer.innerHTML= dDayCount
};
setInterval(clock , 1000);
setTimeout(clock , 1000);