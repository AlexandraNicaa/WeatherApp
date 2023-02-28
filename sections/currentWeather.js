async function displayCurrentWeather(city) {
    const CurrentWeatherData = await getCurrentWeather (city);
    getCurrentWeather("Cluj").then(CurrentWeatherData=> {
    
        // afisam orasul
        "Cluj";
    
        const { dt, main, weather, wind, name } = CurrentWeatherData;
        const day = getDayOfTheWeek(dt);
        const hours = getHour(dt);
    
        // data la care s-a facut cererea
        // dt, format UTC
        
        // gradele in celsius
        // main.temp
        const temperature = Math.round(main.temp);
    
    
        // iconita vremii
        // weather.icon
        const weatherIcon = getWeatherIcon(weather[0].icon);
        
        // se simte ca ...
        // main.feels_like
        const realFeel = Math.round(main.feels_like);
    
        // descrierea vremii
        // weather.description
        // atentie weather este un array care are un singur element
        const weatherDescription = weather[0].description;
    
        // viteza vantului
        // wind.speed  ATENTIE primim m/sec 
        const windSpeed = Math.round(windToKmPerHour(wind.speed));

        const currentWeatherElement = document.querySelector(".current-weather");
        currentWeatherElement.innerHTML = `
        
        <div class="px-3">
          <div class="fs-2 mb-2"><strong>${name}</strong></div>
          <div class="f2-3"><strong>${day}</strong>, ${hours}</div>
          <div class="d-flex align-items-center justify-content-center">
            <strong class="fs-1">${temperature}</strong>
            <img src="${weatherIcon}" alt="" />
          </div>
        </div>
        <div class="px-3">
          <p class="fs-5">Se simte ca <strong>${realFeel}</strong></p>
          <p class="fs-5">${weatherDescription}</p>
          <p class="fs-5">Viteza vantului: <strong>${windSpeed}</strong></p>
        </div>
      </div>`
    });
    
}