
export let coords: string;
let lat: string, lon: string;

let searchInput = document.getElementById('search-input') as HTMLInputElement;

export function setCoords(latitude: string, longitude: string) {
    coords = latitude + ", " + longitude;
}

// Define a function to retrieve the user's location
let userLocation = async function (pos: GeolocationPosition) {
    lat = pos.coords.latitude.toString();
    lon = pos.coords.longitude.toString();

    setCoords(lat, lon);

    const modalContent = document.getElementById("modal_content");
    if (modalContent) {
        // Update the content of a modal element with the location data
        await modalContent.setAttribute('src', 'https://weather-app-4b39f.web.app?q=' + coords)
    }
}

// Function to get the user's current location
async function getLocation(): Promise<boolean> {
    if (navigator.geolocation) {
        // Use geolocation to get the user's current position
        await navigator.geolocation.getCurrentPosition(userLocation);
    } else {
        //     x.innerHTML = "Geolocation is not supported by this browser.";
        console.log("geo Location error")
    }
    // Clear the search input field
    if (searchInput) {
        searchInput.value = '';
    }
    return false;
}

// Update the modal container size when the window is resized
window.onresize = function () {
    let modalContainer = document.getElementsByClassName("modal-container")[0] as HTMLElement;
    modalContainer.style.height = window.innerHeight + "px";
    modalContainer.style.width = window.innerWidth + "px";
}