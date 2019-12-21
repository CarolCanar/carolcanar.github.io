const apiURL = '//api.openweathermap.org/data/2.5/weather?zip=94040,us&units=imperial&APPID=9b187cb192bbfd069044eebd166f188e';


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   console.log(jsObject);

    // document.getElementById('currenttemp').textContent = jsObject.main.temp + 'F';
    const currentf =  'Currently temperature: '+ jsObject.main.temp + 'f';
    document.getElementById('currentlyt').textContent = currentf;
  

  });


 


  