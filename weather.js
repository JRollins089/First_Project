const forecastEl = document.getElementById("forecast");

// Fetch weather forecast data
const weatherRequestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.openweathermap.org/data/2.5/forecast?q=Denver,CoL&appid=6f23fb377d0b5b11d15dd42bdf09fd1f&cnt=3&units=imperial", weatherRequestOptions)
  .then(response => response.json())
  .then(weatherData => {
    console.log(weatherData);
    for (let index = 0; index < weatherData.list.length; index++) {
      const weatherElement = weatherData.list[index];
      console.log(weatherElement.weather[0].description);
      forecastEl.textContent = forecastEl.textContent + weatherElement.weather[0].description + ", ";
    }

    // Fetch public holidays data
    const holidaysRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://date.nager.at/api/v3/PublicHolidays/2023/AT", holidaysRequestOptions)
      .then(response => response.json())
      .then(holidaysData => {
        console.log(holidaysData);
        
        // Update HTML with public holidays data
        const holidaysEl = document.getElementById("holidays");
        holidaysData.forEach(holiday => {
          const holidayDate = new Date(holiday.date).toLocaleDateString();
          holidaysEl.innerHTML += `<p>${holidayDate}: ${holiday.name}</p>`;
        });
      })
      .catch(error => console.log('Error fetching holidays:', error));
  })
  .catch(error => console.log('Error fetching weather:', error));
