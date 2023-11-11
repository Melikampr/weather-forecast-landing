
# Weather Forecast

This project is a weather forecast website that allows users to search for weather information for any location. The website is built using Webpack to transpile TypeScript to JavaScript and SCSS to CSS and it supports image minification. It includes a search feature, an iframe displaying weather data from another site, and a history section showing the last requests for weather forecasts.

## Features

### 1. Search for Any Location

- Includes a search feature that allows users to input a location and retrieve weather information for that location.
- Autocomplete search functionality that assists users in finding accurate weather information. As users type their query, the search bar suggests possible locations based on the input, providing a seamless and efficient search experience.

### 2. Iframe for External Weather Data

- Iframe that displays weather data from another site, providing additional weather information.
- It includes astronomical and historical data.

### 3. History Section

- The history section displays the last requests for weather forecasts made by the user, allowing them to track their request history.
- Displays weather forecast highlights.
## Demo
https://weather-forecast-b7ba0.web.app/

## Installation

Clone the project

```bash
  git clone https://github.com/Melikampr/weather-forecast-landing.git
```

Install dependencies

```bash
  npm install
```

build with webpack
```bash
  npx webpack
```

Open index.html with your browser to see the result.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`WEATHER_API_KEY`

You can get API key from
https://api.weatherapi.com


## Tech Stack

Webpack, Html, TypesScript, Scss, Js, Css

## Author

- [@melikampr](https://www.github.com/melikampr)

