import {handleWeatherData} from "./index"

export let searchResults: any[], query: string;
let table: HTMLTableElement;
const tableContainer: HTMLElement | null = document.querySelector('#table-container');
// Function to fetch search data from an API
export async function getSearchData(inputQuery: string): Promise<void> {
    const api_key = process.env.WEATHER_API_KEY;
    query = inputQuery;

    await fetch(`https://api.weatherapi.com/v1/search.json?key=${api_key}&q=${query}`)
        .then((res) => res.json())
        .then((data) => {
            searchResults = data;
        })
    showSearchResult();
}

//handle exit of table
export function setResult() {
    if (tableContainer) {
        const existingTable = tableContainer.querySelector('table');
        const existingNoResult = tableContainer.querySelector('div');
        if (existingTable) {
            // If it exists, remove it
            tableContainer.removeChild(existingTable);
        }

        if (existingNoResult) {
            tableContainer.removeChild(existingNoResult)
        }
    }
}

// Function to display search results in a table
function showSearchResult() {
    setResult();

    if (tableContainer) {
        if (searchResults.length > 0) {
            const table = document.createElement('table');
            table.className = 'table';

            // Table header
            const thead = document.createElement('thead');
            const headRow = document.createElement('tr');
            ['', 'City', 'Country'].forEach((headerText, index) => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headRow.appendChild(th);
            });
            thead.appendChild(headRow);

            // Table body
            const tbody = document.createElement('tbody');
            searchResults.forEach((result, index) => {
                const row = document.createElement('tr');
                row.addEventListener('click', () => handleWeatherData(index));
                row.className = 'cursor-pointer border-t-2 border-gray-600 hover';

                const indexCell = document.createElement('th');
                indexCell.textContent = (index + 1).toString();
                indexCell.id = "index-th";

                const nameCell = document.createElement('td');
                nameCell.textContent = result.name;
                nameCell.className = "center-td";

                const countryCell = document.createElement('td');
                countryCell.textContent = result.country;

                row.appendChild(indexCell);
                row.appendChild(nameCell);
                row.appendChild(countryCell);
                row.id = "table-row";

                tbody.appendChild(row);
            });

            table.appendChild(thead);
            table.appendChild(tbody);
            tableContainer.appendChild(table);
        } else if (query.length > 2) {
            const noResult = document.createElement('div');
            noResult.className = 'no-result';
            noResult.innerHTML = "There is no result..."
            tableContainer.appendChild(noResult);
        }
    }
}

