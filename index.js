const currentCity = localStorage.getItem("city");
console.log("current", currentCity);

if(!currentCity) {
    localStorage.setItem("city", "Cluj");
    currentCity = "Cluj";
}

updateCurrentCity(currentCity);
displayCurrentWeather(currentCity);