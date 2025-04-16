function handleCityChange() {
    const dropdown = document.getElementById("cityDropdown");
    const selectedCity = dropdown.value;
  
    if (selectedCity) {
      const defaultOption = dropdown.querySelector('option[value=""]');
      if (defaultOption) defaultOption.style.display = "none";
      getForecast(selectedCity);
    }
  }
  