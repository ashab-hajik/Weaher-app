function getForecast(city) {
    const apiKey = "fd1f7a08d8b4d12b15ca4dbcbd01b632";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById("forecast");
        container.innerHTML ="";
  
        for (let i = 0; i < data.list.length; i += 8) {
          const day = data.list[i];
          const date = new Date(day.dt * 1000).toDateString();
          const temp = day.main.temp;
          const desc = day.weather[0].description;
          const iconCode = day.weather[0].icon;
          const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
          container.innerHTML += `
          <div class="forecast-day">
      <p><strong class="forecast-date">${date}</strong>: <span class="forecast-temp">${temp}°C</span> - <span class="forecast-desc">${desc}</span></p>
      <img class="forecast-icon" src="${iconUrl}" alt="${desc}">
    </div>
  `;
        }
});
}