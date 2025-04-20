async function getCoordinates(event) {
	event.preventDefault();
  
	const city = document.getElementById('cityInput').value.trim();
	// const cityName = document.getElementById('cityInput').value;
document.getElementById('cityheading').textContent = `Weather in ${city}`;


	const apiKey = "c1adbb9cf4ca237e393186879457c5e6";
	const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  
	try {
	  const geoRes = await fetch(geoUrl);
	  const geoData = await geoRes.json();
  
	  if (geoData.length === 0) {
		document.getElementById('output').textContent = "City not found!";
		return;
	  }
  
	  const { lat, lon, name, country } = geoData[0];
  
	  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
	  const weatherRes = await fetch(weatherUrl);
	  const weatherData = await weatherRes.json();
  
	  // Inject into card elements using IDs
	  document.getElementById('temp').textContent = weatherData.main.temp;
	  document.getElementById('temp2').textContent = weatherData.main.temp;
	  document.getElementById('feels_like').textContent = weatherData.main.feels_like;
	  document.getElementById('temp_min').textContent = weatherData.main.temp_min;
	  document.getElementById('temp_max').textContent = weatherData.main.temp_max;
	  document.getElementById('pressure').textContent = weatherData.main.pressure;
	  document.getElementById('pressure2').textContent = weatherData.main.pressure;
	  document.getElementById('humidity').textContent = weatherData.main.humidity;
	  document.getElementById('humidity2').textContent = weatherData.main.humidity;
	  document.getElementById('weather_main').textContent = weatherData.weather[0].main;
	  document.getElementById('weather_desc').textContent = weatherData.weather[0].description;
  
	  // Optional: Show card if it's hidden
	
  
	} catch (err) {
	  console.error("Error fetching data:", err);
	  document.getElementById('output').textContent = "Failed to load weather data.";
	}
  }
  