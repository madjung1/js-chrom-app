const docBody = document.querySelector("body");
docBody.style.backgroundColor="blueviolet"
function widthCheck() {
    var windowWidth = window.innerWidth;
    if(windowWidth > 500){
        docBody.style.backgroundColor="rgb(238,188,18)";
    }else if(500>windowWidth&&windowWidth>400){
        docBody.style.backgroundColor="blueviolet"
    }else{
        docBody.style.backgroundColor="skyblue"
    };
}

window.onresize = widthCheck;