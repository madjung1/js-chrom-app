const images = [
    {
        image : "0.jpg",
        sub : "고등어"
    },
    {
        image : "1.jpg",
        sub : "그림자"
    },
    {
        image : "2.jpg",
        sub : "검은고양이"
    },
    {
        image : "3.jpg",
        sub : "치즈냥"
    },
    {
        image : "4.jpg",
        sub : "고등어 혓바닥"
    }
]
const imageSub = document.querySelector("#bg-sub span:first-child");
const randomNum = Math.floor(Math.random()*images.length)
const randomImage = images[randomNum].image;
const bgImage = document.createElement("img");
bgImage.src = `img/${randomImage}`;
document.body.appendChild(bgImage);
imageSub.innerHTML = images[randomNum].sub