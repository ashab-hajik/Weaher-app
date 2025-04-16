function handleFormSubmit(event) {
    event.preventDefault();
    const city = document.getElementById("cityInput").value;
  
    if (!city) {
      alert("Please enter a city name");
      return;
    }
  
    getCoordinates(event);
    getForecast(city);
  }
  