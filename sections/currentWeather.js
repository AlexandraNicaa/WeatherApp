async function displayCurrentWeather(city) {
    const CurrentWeatherData = await getCurrentWeather (city);

        const { dt, main, weather, wind, name } = CurrentWeatherData;
        const day = getDayOfTheWeek(dt);
        const hours = getHour(dt);

        const temperature = Math.round(main.temp);
        const weatherIcon = getWeatherIcon(weather[0].icon);       
        const realFeel = Math.round(main.feels_like);
    
      
        // atentie weather este un array care are un singur element
        const weatherDescription = weather[0].description;
    
        // ATENTIE primim m/sec 
        const windSpeed = Math.round(windToKmPerHour(wind.speed));

        const currentWeatherElement = document.querySelector(".current-weather");
        currentWeatherElement.innerHTML = `
        
        <div class="px-3">
          <div class="fs-2 mb-2"><strong>${name}</strong></div>
          <div class="f2-3"><strong>${day}</strong>, ${hours}</div>
          <div class="d-flex align-items-center justify-content-center">
            <strong class="fs-1">${temperature}°C</strong>
            <img src="${weatherIcon}" alt="" />
          </div>
        </div>
        <div class="px-3">
          <p class="fs-5">Se simte ca <strong>${realFeel}°C</strong></p>
          <p class="fs-5">${weatherDescription}</p>
          <p class="fs-5">Viteza vantului: <strong>${windSpeed}km/h</strong></p>
        </div>
      </div>`
    };
    
    