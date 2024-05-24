document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'f4171ac5cabb39232a34f2b332cd472f'; // Replace with your OpenWeatherMap API key
    const city = 'Maceio'; // Replace with your city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tempElement = document.getElementById('weather-temp');
            const descElement = document.getElementById('weather-desc');
            const iconElement = document.getElementById('weather-icon');

            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

            tempElement.textContent = `Temperature: ${temperature} °C`;
            descElement.textContent = `Description: ${description}`;
            iconElement.src = iconUrl;
            iconElement.style.display = 'block';
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
