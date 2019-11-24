const apiURL1 = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=9b187cb192bbfd069044eebd166f188e';

fetch(apiURL1)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    j=1;
    
   for (let i = 0; i < jsObject.list.length;i++){
       if (jsObject.list[i].dt_txt.includes('18:00:00')){
           console.log(jsObject.list[i].main.temp);
           console.log(jsObject.list[i].weather[0].icon);
           const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
           document.getElementById(j).textContent = jsObject.list[i].main.temp;
           document.getElementById('icon').setAttribute('src', 'teset.png');

           console.log(imagesrc);
           j++;
       }
   }


   





  });


 


  