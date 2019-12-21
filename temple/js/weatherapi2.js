const apiURL1 = '//api.openweathermap.org/data/2.5/weather?zip=30301,us&units=imperial&APPID=9b187cb192bbfd069044eebd166f188e';


fetch(apiURL1)
  .then((response) => response.json())
  .then((jsObject) => {
   console.log(jsObject);

    // document.getElementById('currenttemp').textContent = jsObject.main.temp + 'F';
    const currentf =  'Currently temperature: '+ jsObject.main.temp + 'f';
    document.getElementById('currentlyt2').textContent = currentf;
  




  });


 


  