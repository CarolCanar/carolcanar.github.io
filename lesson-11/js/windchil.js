var tempf = parseFloat(document.getElementById('hight').textContent);
var speed = parseFloat(document.getElementById('windspeed').textContent);
var windchill = 35.74+0.6215*tempf-35.75*(Math.pow(speed,0.16)+0.4275*tempf*(Math.pow(speed,0.16)));

document.getElementById('windchill').textContent = windchill;