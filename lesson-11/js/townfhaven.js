const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    
    const events =  towns[1].events;
   
    let j = 1;
    for (let i = 0; i < events.length; i++) {
        let p1 = document.createElement("p");
        p1.textContent = events[i];
        document.querySelector('div.p').appendChild(p1);
     
    }
   
   
  });

  


  