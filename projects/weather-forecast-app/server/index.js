const express = require('express');
const cors = require('cors');
const axios = require('axios');
const NodeCache = require('node-cache');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5003;
const cache = new NodeCache({ stdTTL: 600 }); // Cache for 10 minutes

app.use(cors());
app.use(express.json());

// Mock weather data (in production, would use OpenWeatherMap API)
const mockWeatherData = {
  current: {
    location: 'San Francisco, CA',
    temperature: 22,
    humidity: 65,
    windSpeed: 12,
    windDirection: 'NW',
    pressure: 1013,
    visibility: 10,
    uvIndex: 6,
    condition: 'Partly Cloudy',
    icon: 'partly-cloudy-day',
    feelsLike: 24
  },
  forecast: [
    {
      date: '2024-01-15',
      day: 'Today',
      high: 24,
      low: 18,
      condition: 'Partly Cloudy',
      icon: 'partly-cloudy-day',
      precipitation: 10,
      humidity: 65,
      windSpeed: 12
    },
    {
      date: '2024-01-16',
      day: 'Tomorrow',
      high: 26,
      low: 19,
      condition: 'Sunny',
      icon: 'sunny',
      precipitation: 0,
      humidity: 55,
      windSpeed: 8
    },
    {
      date: '2024-01-17',
      day: 'Wednesday',
      high: 23,
      low: 17,
      condition: 'Light Rain',
      icon: 'rain',
      precipitation: 80,
      humidity: 85,
      windSpeed: 15
    },
    {
      date: '2024-01-18',
      day: 'Thursday',
      high: 21,
      low: 15,
      condition: 'Cloudy',
      icon: 'cloudy',
      precipitation: 20,
      humidity: 70,
      windSpeed: 10
    },
    {
      date: '2024-01-19',
      day: 'Friday',
      high: 25,
      low: 18,
      condition: 'Partly Cloudy',
      icon: 'partly-cloudy-day',
      precipitation: 5,
      humidity: 60,
      windSpeed: 11
    },
    {
      date: '2024-01-20',
      day: 'Saturday',
      high: 27,
      low: 20,
      condition: 'Sunny',
      icon: 'sunny',
      precipitation: 0,
      humidity: 50,
      windSpeed: 7
    },
    {
      date: '2024-01-21',
      day: 'Sunday',
      high: 24,
      low: 18,
      condition: 'Partly Cloudy',
      icon: 'partly-cloudy-day',
      precipitation: 15,
      humidity: 65,
      windSpeed: 9
    }
  ],
  hourly: [
    { time: '12:00', temperature: 22, condition: 'Partly Cloudy', icon: 'partly-cloudy-day' },
    { time: '13:00', temperature: 23, condition: 'Partly Cloudy', icon: 'partly-cloudy-day' },
    { time: '14:00', temperature: 24, condition: 'Sunny', icon: 'sunny' },
    { time: '15:00', temperature: 24, condition: 'Sunny', icon: 'sunny' },
    { time: '16:00', temperature: 23, condition: 'Partly Cloudy', icon: 'partly-cloudy-day' },
    { time: '17:00', temperature: 22, condition: 'Cloudy', icon: 'cloudy' },
    { time: '18:00', temperature: 21, condition: 'Cloudy', icon: 'cloudy' },
    { time: '19:00', temperature: 20, condition: 'Cloudy', icon: 'cloudy' }
  ]
};

// Current weather endpoint
app.get('/api/weather/current/:location', (req, res) => {
  const { location } = req.params;
  const cacheKey = `current-${location}`;
  
  let cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.json(cachedData);
  }

  // Simulate different weather for different locations
  const weatherData = {
    ...mockWeatherData.current,
    location: location.replace('-', ', '),
    temperature: Math.floor(Math.random() * 20) + 15, // 15-35°C
    humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
    windSpeed: Math.floor(Math.random() * 20) + 5, // 5-25 km/h
  };

  cache.set(cacheKey, weatherData);
  res.json(weatherData);
});

// Forecast endpoint
app.get('/api/weather/forecast/:location', (req, res) => {
  const { location } = req.params;
  const cacheKey = `forecast-${location}`;
  
  let cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.json(cachedData);
  }

  // Generate varied forecast data
  const forecastData = mockWeatherData.forecast.map((day, index) => ({
    ...day,
    high: Math.floor(Math.random() * 15) + 20, // 20-35°C
    low: Math.floor(Math.random() * 10) + 10,  // 10-20°C
    precipitation: Math.floor(Math.random() * 100),
  }));

  cache.set(cacheKey, forecastData);
  res.json(forecastData);
});

// Hourly forecast endpoint
app.get('/api/weather/hourly/:location', (req, res) => {
  const { location } = req.params;
  const cacheKey = `hourly-${location}`;
  
  let cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.json(cachedData);
  }

  const hourlyData = mockWeatherData.hourly.map(hour => ({
    ...hour,
    temperature: Math.floor(Math.random() * 10) + 18, // 18-28°C
  }));

  cache.set(cacheKey, hourlyData);
  res.json(hourlyData);
});

// Weather alerts endpoint
app.get('/api/weather/alerts/:location', (req, res) => {
  const alerts = [
    {
      id: '1',
      type: 'warning',
      title: 'High UV Index',
      description: 'UV index will reach dangerous levels between 11 AM and 3 PM',
      severity: 'moderate',
      startTime: '2024-01-15T11:00:00Z',
      endTime: '2024-01-15T15:00:00Z'
    }
  ];
  
  res.json(alerts);
});

// Search cities endpoint
app.get('/api/cities/search', (req, res) => {
  const { q } = req.query;
  
  const cities = [
    { id: 1, name: 'San Francisco', country: 'US', state: 'California' },
    { id: 2, name: 'New York', country: 'US', state: 'New York' },
    { id: 3, name: 'London', country: 'UK', state: '' },
    { id: 4, name: 'Paris', country: 'FR', state: '' },
    { id: 5, name: 'Tokyo', country: 'JP', state: '' },
    { id: 6, name: 'Sydney', country: 'AU', state: 'New South Wales' },
    { id: 7, name: 'Toronto', country: 'CA', state: 'Ontario' },
    { id: 8, name: 'Berlin', country: 'DE', state: '' }
  ];

  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().includes(q.toLowerCase())
  );

  res.json(filteredCities);
});

app.listen(PORT, () => {
  console.log(`Weather Forecast server running on port ${PORT}`);
});