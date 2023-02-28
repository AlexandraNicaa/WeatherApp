const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const currentCity = localStorage.getItem("city");
console.log("current", currentCity);

if(!currentCity) {
    localStorage.setItem("city", "Cluj");
    currentCity = "Cluj";
}

updateCurrentCity(currentCity);
displayCurrentWeather(currentCity);