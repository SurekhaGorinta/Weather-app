const apiKey = "YOUR_API_KEY";  // Replace with your OpenWeatherMap API key

// Function to get weather data
function getWeather() {
    const city = document.getElementById('city').value;
    
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found");
            } else {
                document.getElementById("temp").textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById("description").textContent = `Description: ${data.weather[0].description}`;
                document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById("wind").textContent = `Wind Speed: ${data.wind.speed} m/s`;
            }
        })
        .catch(error => {
            alert("An error occurred. Please try again.");
            console.log(error);
        });
}
