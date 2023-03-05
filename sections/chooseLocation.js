const cluj = document.querySelector(".dropdown-item.cluj");
const floresti = document.querySelector(".dropdown-item.floresti");
const sibiu = document.querySelector(".dropdown-item.sibiu");
const timisoara = document.querySelector(".dropdown-item.timisoara");
const oradea = document.querySelector(".dropdown-item.oradea");
const brasov = document.querySelector(".dropdown-item.brasov");
const baciu = document.querySelector(".dropdown-item.baciu");
const piatraNeamt = document.querySelector(".dropdown-item.piatra-neamt");
const bucuresti = document.querySelector(".dropdown-item.bucuresti");
const arad = document.querySelector(".dropdown-item.arad");
const iasi = document.querySelector(".dropdown-item.iasi");

function updateCurrentCity(city) {
    // selectam tag-ul care contine orasul principal
    const currentCityElement = document.querySelector(".current-city");
    currentCityElement.innerHTML = city;
}

function updateWeather(city) {

    localStorage.setItem("city", city)

    updateCurrentCity(city);
    displayCurrentWeather(city);
    displayWeatherForecast(city);
}

// adding event listeners for items in dropdown
cluj.addEventListener("click", function() {
    updateWeather("Cluj");
})

floresti.addEventListener("click", function() {
    updateWeather("Floresti");
})

sibiu.addEventListener("click", function() {
    updateWeather("Sibiu");
})

timisoara.addEventListener("click", function() {
    updateWeather("Timisoara"); 
})

oradea.addEventListener("click", function() {
    updateWeather("Oradea");
})

brasov.addEventListener("click", function() {
    updateWeather("Brasov");
})

baciu.addEventListener("click", function() {
    updateWeather("Baciu");
})

piatraNeamt.addEventListener("click", function() {
    updateWeather("Piatra-Neamt");
})

bucuresti.addEventListener("click", function() {
    updateWeather("București");
})

arad.addEventListener("click", function() {
    updateWeather("Arad");
})

iasi.addEventListener("click", function() {
    updateWeather("Iasi");
})