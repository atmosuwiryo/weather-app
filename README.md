# Angular Weather Forecast App

This is a simple Angular application that fetches weather forecast data from an API and visualizes it using Chart.js.

## Features

- Display weather forecast for District of Columbia and Kansas.
- Visualize temperature data using a line chart.
- Clickable options to select weather forecast locations.

## Requirements

- Node.js and npm should be installed on your system.
- Angular CLI should be installed globally.

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
cd weather-app
```

2. Install dependencies:

```bash
npm install
```

## Usage

1. Run the Angular development server:

```bash
ng serve
```

2. Navigate to `http://localhost:4200/` in your browser.

3. Click on the weather forecast options to view the corresponding forecast data.

## API

This application fetches weather forecast data from the following API endpoints:

- District of Columbia: [https://api.weather.gov/gridpoints/LWX/31,80/forecast](https://api.weather.gov/gridpoints/LWX/31,80/forecast)
- Kansas: [https://api.weather.gov/gridpoints/TOP/31,80/forecast](https://api.weather.gov/gridpoints/TOP/31,80/forecast)

## Technologies Used

- Angular
- Chart.js
- HTML/CSS
- TypeScript
- Eslint
- Prettier

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
