document.addEventListener("DOMContentLoaded", function() {
const apiURL1 = '//api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=9b187cb192bbfd069044eebd166f188e';

var day = today.getDay()+1;
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var j = 6;
var a = 1;

for (day; day <= j; day++) {

  var dayname = weekday[day];
  
  if (a<6) {
      document.getElementById('tomorrow'+a).innerHTML = dayname;
  }
  a++;
  if (day == j) {
      j = j-a;
      day = -1;
  }
}


fetch(apiURL1)
  .then((response) => response.json())
  .then((jsObject) => {
  
  j=1;


  /*
  k=6;
  a=1;
  var day = today.getDay()+1;
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  for (day; day <= k; day++) {
    var dayname = weekday[day];

    document.getElementById('tomorrow'+a).innerHTML = dayname;
    a++;
  }
  
  */  
  
   for (let i = 0; i < jsObject.list.length;i++){
       if (jsObject.list[i].dt_txt.includes('18:00:00')){
    
           var dt = Date(jsObject.list[i].dt_txt);
           console.log(jsObject.list[i].dt_txt);
           console.log(dt);
           const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
           document.getElementById(j).textContent = jsObject.list[i].main.temp;

       
           document.getElementById('icon'+j).setAttribute('src', imagesrc);
 
           j++;
       }
   }


   





  });

});

 


  