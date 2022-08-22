// Declare variables
const APIKey = 'd9334e7d6d90fb3c0411a3cd054f33dc';
let city = document.getElementById('citySearch');
let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
const geocodingRequest = "https://api.openweathermap.org/geo/1.0/direct";
const weatherRequest = "https://api.openweathermap.org/data/2.5/onecall";
const input = document.getElementById('submit');
const temp = document.getElementById('temp');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const uvindex = document.getElementById('temp');

// API Call
button.addEventListener('click', function(name)) {
    fecth("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey)
    .then(response => response.json())
    .then(data => {
      let tempValue = data['main']['temp'];
      let cityValue = data['name'];
      let uv = data['weather'][0]['description'];
      let humidityValue = data['main']['humidity'];
      
      city.innerHTML = "weather at "+ cityValue;
      weather.innerHTML = "weather: "+ weatherValue;
      temperature.innerHTML = "temperature: "+ tempValue + " celcius";
      humidity.innerHTML = "humidity: "+ humidityValue;
    })
};