const apiURL2 = '//api.openweathermap.org/data/2.5/weather?zip=35004,us&units=imperial&APPID=9b187cb192bbfd069044eebd166f188e';


fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
   console.log(jsObject);

    // document.getElementById('currenttemp').textContent = jsObject.main.temp + 'F';
    const currentf =  'Currently temperature: '+ jsObject.main.temp + 'f';
    document.getElementById('currentlyt3').textContent = currentf;
  

  });


 


  