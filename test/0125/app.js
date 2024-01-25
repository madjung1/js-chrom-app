const title = document.querySelector("h1");
console.log(title);
title.innerText = "hellow";
const superEventHandler = {
    enter : function(){
        title.innerText = "The mouse is here";
        title.style.color = "skyblue";
    },
    leave : function(){
        title.innerText = "The mouse is gone";
        title.style.color = "orange";
    },
    right : function(){
        title.innerText = "That was a right click";
        title.style.color = "green";
    },
    resize : function(){
        title.innerText = "Just resized";
        title.style.color = "purple";
    }
}
console.log(superEventHandler);

title.addEventListener("mouseenter", superEventHandler.enter);
title.addEventListener("mouseleave", superEventHandler.leave);
window.onresize = superEventHandler.resize
window.oncontextmenu = superEventHandler.right






