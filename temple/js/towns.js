const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    let j = 1;
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let image = document.createElement('img');
      
        
        h2.textContent = towns[i].name;
        p1.textContent = towns[i].motto;
        p2.textContent = 'year founded' + towns[i].yearFounded; 
        p3.textContent = 'population' + towns[i].currentPopulation; 
        p4.textContent = 'annual rain fall ' + towns[i].averageRainfall; 
        
        image.setAttribute('src', 'images/t' + j +'.jpg' );
        j++;

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(image);
        
        document.querySelector('div.cards').appendChild(card);
 
      } 
  });

  


  