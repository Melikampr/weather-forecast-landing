
# Weather Forecast

This project is a weather forecast website that allows users to search for weather information for any location. The website is built using Webpack to transpile TypeScript to JavaScript and SCSS to CSS and it supports image minification. It includes a search feature, an iframe displaying weather data from another site, and a history section showing the last requests for weather forecasts.

## Features

- Display the current weather conditions and temperature of the user's location
- Provide a forecast for the next few days
- Utilize a chart to display historical weather data
- Display astronomical data such as sunrise, sunset,...

### 1. Search for Any Location

The website includes a search feature that allows users to input a location and retrieve weather information for that location.

### 2. Iframe for External Weather Data

The website features an iframe that displays weather data from another site, providing additional weather information.

### 3. History Section

The history section displays the last requests for weather forecasts made by the user, allowing them to track their search history.
## Demo

https://weather-app-4b39f.web.app/
## Installation

Clone the project

```bash
  git clone https://github.com/Melikampr/weather-app.git
```

Install dependencies

```bash
  npm install
```

Run the project
```bash
  npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_WEATHER_API_KEY`

You can get API key from
https://api.weatherapi.com


## Tech Stack

**Client:** React, Next, TailwindCSS

## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Author

- [@melikampr](https://www.github.com/melikampr)

