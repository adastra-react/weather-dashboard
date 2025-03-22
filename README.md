# Weather Dashboard

A React application that displays current weather conditions for three different cities:

- Joinville / SC (Brazil)
- San Francisco / CA (USA)
- Urubici / SC (Brazil)

## Features

- 🌡️ Display of temperature (in Celsius)
- 💧 Humidity level (percentage)
- ⏲️ Atmospheric pressure
- 🎨 Color-coded temperature display:
  - 5°C or below → Blue
  - Above 5°C and up to 25°C → Orange
  - Above 25°C → Red
- 🔄 Weather data updates every 10 minutes automatically

## Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- OpenWeatherMap API Key

## Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure your API key**

Replace the placeholder API key in `src/App.js` with your actual OpenWeatherMap API key:

```javascript
const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
```

To get an API key:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/)
2. Navigate to your account and create an API key (it might take a few hours for a new key to activate)

3. **Start the development server**

```bash
npm start
```

5. **Open in your browser**

Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
weather-dashboard/
│
├── public/
│   ├── index.html         # HTML entry point
│   ├── favicon.ico        # Site favicon
│   ├── manifest.json      # Web app manifest
│   └── robots.txt         # Search engine instructions
│
├── src/
│   ├── components/
│   │   ├── WeatherCard.js       # Weather card component
│   │   ├── WeatherCard.css      # Weather card styling
│   │   └── WeatherCard.test.js  # Component tests
│   │
│   ├── App.js            # Main application component
│   ├── App.css           # Main application styling
│   └── index.js          # JavaScript entry point
│
├── .env                  # Environment variables file
├── .gitignore            # Git ignore rules
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Locked versions of dependencies
└── README.md             # Project documentation
```

## Build for Production

To create a production-ready build, run:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory and can be deployed to a static hosting service.

## Technologies Used

- React.js
- JavaScript (ES6+)
- CSS3
- OpenWeatherMap API

## License

MIT

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
