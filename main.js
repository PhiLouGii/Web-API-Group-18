javascript
const apiKey = 'YOUR_API_KEY';
const city = 'New York';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

    // Display the weather data in the UI
    document.getElementById('temperature').textContent = temperature;
    document.getElementById('description').textContent = description;
    document.getElementById('icon').setAttribute('src', iconUrl);
  })
  .catch(error => console.error(error));
