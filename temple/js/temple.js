

const requestURL = 'https://api.myjson.com/bins/uk61w';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);  // temporary checking for valid response and data parsing
    const templeInfo = jsonObject['temples'];
    console.log(templeInfo[0].name);
    //document.getElementById('name1').innerHTML = "<strong>Name:</strong><br>" + templeInfo.temples[0].name;
    for (var i=1; i < 5; i++) {
        document.getElementById('name'+ i).innerHTML = "<strong>Name:</strong><br>" + templeInfo[i-1].name;
        document.getElementById('address'+ i).innerHTML = "<strong>Address & phone:</strong><br>" + templeInfo[i-1].address + " <br>" + templeInfo[i-1].telephone;
        document.getElementById('email'+ i).innerHTML = "<strong>e-mail:</strong><br>" + templeInfo[i-1].email;
        document.getElementById('services'+ i).innerHTML = "<strong>Services:</strong><br>" + templeInfo[i-1].services;
        document.getElementById('history'+ i).innerHTML = "<strong>History:</strong><br>" + templeInfo[i-1].history;
        document.getElementById('ordinaces'+ i).innerHTML = "<strong>Ordinaces Schedule:</strong><br>" + templeInfo[i-1].ordinanceschedule;
        document.getElementById('sessions'+ i).innerHTML = "<strong>Sessions Schedule:</strong><br>" + templeInfo[i-1].sessionschedule;
        document.getElementById('closure'+ i).innerHTML = "<strong>Temple closure:</strong><br>" + templeInfo[i-1].closure;
        }
  });
