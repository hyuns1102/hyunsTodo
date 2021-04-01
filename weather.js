const weather = document.querySelector(".js-weather");
const API_KEYS = "8010af48d7da9bda9fa26093abf58cd2";
const COORDS = "coords";


function getWeather(lat, lon){
   fetch(
       `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`
   ).then(function(response){                        // 'then'은 networking을 할 때, 위의 API에서 DATA를 받아오는데 걸리는 시간이 있다. 그 시간을 기다려주는 역할
                                                    // 그다음 함수를 호출 해준다
      // console.log(response);                     // 위의 url을 통해 들어온 데이터들은 jason 객체로 받아질 수 있다.
       return response.json();                      // response는 jason 객체를 응답받는 형식 (?)

   }).then(function(json){
        const temperature = json.main.temp;     
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
   });                                              // JavaScript Networking 하는 방법
}   
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify (coordsObj));
}
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Cant access geo location"); 
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords()
}
init();