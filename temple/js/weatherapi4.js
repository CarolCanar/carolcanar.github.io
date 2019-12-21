const apiURL3 = '//api.openweathermap.org/data/2.5/weather?zip=67846,us&units=imperial&APPID=9b187cb192bbfd069044eebd166f188e';


fetch(apiURL3)
  .then((response) => response.json())
  .then((jsObject) => {
   console.log(jsObject);

    // document.getElementById('currenttemp').textContent = jsObject.main.temp + 'F';
    const currentf =  'Currently temperature: '+ jsObject.main.temp + 'f';
    document.getElementById('currentlyt4').textContent = currentf;
  




  });


 


  