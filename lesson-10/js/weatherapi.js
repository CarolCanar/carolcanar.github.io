const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=9b187cb192bbfd069044eebd166f188e';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    //document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('currently').textContent = jsObject.main.temp;
    document.getElementById('hight').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.temp;
    document.getElementById('windspeed').textContent = jsObject.wind.speed;

    //const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    //const desc = jsObject.weather[0].description;  // note how we reference the weather array
//document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
//document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
//document.getElementById('icon').setAttribute('alt', desc);






  });


 


  