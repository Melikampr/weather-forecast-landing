// import { setWeatherData, showHistory } from "./history";
export let currentDate: Date;

// Function to display a modal with user location data
export function showModal() {
    let modalContainer = document.getElementsByClassName("modal-container")[0] as HTMLElement;
    modalContainer.style.display = "flex";
    currentDate = new Date();
    showTime(currentDate);
}

// Function to hide the modal and set weather data
export async function hideModal() {
    let modalContainer = document.getElementsByClassName("modal-container")[0] as HTMLElement;
    modalContainer.style.display = "none";
    // await setWeatherData();
    // showHistory();
}

// Function to display the last request time
function showTime(receivedDate: Date) {
    const dateString = receivedDate.toDateString()
    const timeString = receivedDate.toLocaleTimeString();
    const timeDisplayDiv = document.getElementById('request-time');
    if (timeDisplayDiv !== null) { // Check if the element exists
        timeDisplayDiv.innerHTML = 'Last request time: ' + timeString + " - " + dateString;
    }
}