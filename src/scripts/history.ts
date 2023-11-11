import { coords } from "./index";
import { currentDate } from "./modal";

let weatherData: any;

// Function to fetch weather data from an API
async function getData(): Promise<void> {
    const api_key = '79b018d6047e4db0bc1140248231609';

    const locationCoords = coords.split(", ")
    const lat = locationCoords[0];
    const lon = locationCoords[1];

    await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${lat},${lon}&days=1&aqi=no&alerts=no`)
        .then((res) => res.json())
        .then((data) => {
            weatherData = data;
        })
}

// Function to get the day of the week
function dayOfWeek(): string {
    const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[currentDate.getDay()];
}

// Function to get the month name
function getMonth(): string {
    const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[currentDate.getMonth()];
}

// Function to get the full date string
function getDate(): string {
    return dayOfWeek() + ", " + currentDate.getDate() + " " + getMonth();
}

export async function setWeatherData(): Promise<void> {
    await getData();
    setCurrentWeather();
    setTodayHighlight();
}

// Function to display current weather information
function setCurrentWeather() {
    let locationName = document.getElementById('location-name');
    if (locationName)
        locationName.innerHTML = weatherData.location.name + ", " + weatherData.location.country;
    let temperature = document.getElementById('temperature');
    if (temperature)
        temperature.innerHTML = weatherData.current.temp_c + '\u00b0';
    let weatherIcon = document.getElementById("weather-icon");
    let url = "https://" + weatherData.current.condition.icon;
    if (weatherIcon) {
        weatherIcon.setAttribute('src', url);
    }
    let weatherCondition = document.getElementById("weather-condition");
    if (weatherCondition)
        weatherCondition.innerHTML = weatherData.current.condition.text;
    let date = document.getElementById("date")
    if (date)
        date.innerHTML = getDate();
}

// Function to show highlights of weather data
function setTodayHighlight() {
    let maxTemp = document.getElementById("max-temp");
    if (maxTemp)
        maxTemp.innerHTML = weatherData.forecast.forecastday[0].day.maxtemp_c + '\u00b0';
    let minTemp = document.getElementById("min-temp");
    if (minTemp)
        minTemp.innerHTML = weatherData.forecast.forecastday[0].day.mintemp_c + '\u00b0';
    let humidity = document.getElementById("humidity");
    if (humidity)
        humidity.innerHTML = weatherData.forecast.forecastday[0].day.avghumidity + '%';
    let wind = document.getElementById("wind");
    if (wind)
        wind.innerHTML = weatherData.forecast.forecastday[0].day.avgvis_km + " " + "km/h"
    let rain = document.getElementById("rain");
    if (rain)
        rain.innerHTML = weatherData.forecast.forecastday[0].day.daily_chance_of_rain + "%";
    let snow = document.getElementById("snow");
    if (snow)
        snow.innerHTML = weatherData.forecast.forecastday[0].day.daily_chance_of_snow + "%"
}

// Function to show history of weather data
export function showHistory() {
    let requestHistory = document.getElementById("request-history");
    if (requestHistory) {
        requestHistory.style.display = "flex";
        requestHistory.style.flexDirection = "column";
        requestHistory.style.gap = "2rem";
    }
    let historyText = document.getElementById("history-text");
    if (historyText) {
        historyText.style.display = "none";
    }
    let pageContent = document.getElementById("page-content")
    if (pageContent) {
        pageContent.style.marginTop = "3.5rem";
        pageContent.style.gap = "1.5rem"
    }
    let modalButton = document.getElementById("modal-button")
    if (modalButton) {
        modalButton.style.fontSize = "small";
        modalButton.style.padding = "0.5rem";
    }
    const searchLocation = document.getElementById("search-location");
    if (searchLocation) {
        searchLocation.style.width = "50%";
    }

}