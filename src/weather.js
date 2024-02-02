const API_KEY = weatherKey.value;
function onGeo(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(Response => Response.json()).then(data=> {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C `;
        city.innerText = data.name;
    });
}
function onGeoError(){
    alert("can't i find you. No weather for you")
}
navigator.geolocation.getCurrentPosition(onGeo, onGeoError);