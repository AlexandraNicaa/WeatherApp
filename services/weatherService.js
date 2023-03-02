// API KEYS nu ar trebui sa fie stocate in forma de text, deoarece nu este sigur!
// fara server propriu, nu putem fi 100% safe. Dar avand in vedere ca openweather este gratuit, cel mai rau caz ramanem cu cheia blocata.
const API_KEY = "497116635591decffc78817d59d6b75d";

// URL de baza pentru call-urile pe OpenWeather API
const API_URL = "https://api.openweathermap.org/data/2.5";

// Query parameters care vor fi trimisi la fiecare request
// appid = api key pentru identificare
const DEFAULT_QUERY_PARAMETERS = `lang=ro&units=metric&appid=${API_KEY}`;


function getCurrentWeather(city) {
    // construim link-ul (endPointuri) catre cererea de current weather folosind info predefinite
   return fetchAndParse (`${API_URL}/weather?q=${city}&${DEFAULT_QUERY_PARAMETERS}`)
}

function getForecast(city) {
    return fetchAndParse(`${API_URL}/forecast?q=${city}&${DEFAULT_QUERY_PARAMETERS}`)
}