import { useState } from 'react'
import './App.css'

interface WeatherData {
  temp: number
  feels_like: number
  humidity: number
  description: string
  icon: string
  city: string
  wind_speed: number
}

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getWeather = async (searchCity?: string) => {
    const cityToSearch = searchCity || city
    if (!cityToSearch.trim()) {
      setError('Please enter a city name')
      return
    }

    setLoading(true)
    setError('')

    try {
      // For demo purposes, return mock data
      // In production, use: `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&appid=${API_KEY}&units=metric`

      await new Promise(resolve => setTimeout(resolve, 500)) // Simulate API delay

      const mockWeather: WeatherData = {
        temp: Math.floor(Math.random() * 20) + 15,
        feels_like: Math.floor(Math.random() * 20) + 14,
        humidity: Math.floor(Math.random() * 40) + 40,
        description: ['Clear sky', 'Few clouds', 'Scattered clouds', 'Rainy', 'Sunny'][Math.floor(Math.random() * 5)],
        icon: '01d',
        city: cityToSearch.charAt(0).toUpperCase() + cityToSearch.slice(1),
        wind_speed: Math.floor(Math.random() * 10) + 3
      }

      setWeather(mockWeather)
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const getWeatherIcon = (description: string) => {
    const desc = description.toLowerCase()
    if (desc.includes('clear')) return 'CLEAR'
    if (desc.includes('cloud')) return 'CLOUDY'
    if (desc.includes('rain')) return 'RAINY'
    if (desc.includes('snow')) return 'SNOW'
    if (desc.includes('thunder')) return 'STORM'
    return 'PARTLY'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    getWeather()
  }

  const popularCities = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney']

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Weather App</h1>
        <p className="subtitle">Get real-time weather information for any city</p>

        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="search-button" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        <div className="popular-cities">
          <span>Popular cities:</span>
          {popularCities.map((popularCity) => (
            <button
              key={popularCity}
              className="city-chip"
              onClick={() => {
                setCity(popularCity)
                getWeather(popularCity)
              }}
            >
              {popularCity}
            </button>
          ))}
        </div>

        {error && <div className="error">{error}</div>}

        {weather && !loading && (
          <div className="weather-card">
            <div className="weather-header">
              <h2>{weather.city}</h2>
              <div className="weather-icon">{getWeatherIcon(weather.description)}</div>
            </div>

            <div className="temperature">
              <div className="temp-main">{Math.round(weather.temp)}°C</div>
              <div className="temp-feels">Feels like {Math.round(weather.feels_like)}°C</div>
            </div>

            <div className="weather-description">{weather.description}</div>

            <div className="weather-details">
              <div className="detail-item">
                <div className="detail-icon">HUMID</div>
                <div className="detail-label">Humidity</div>
                <div className="detail-value">{weather.humidity}%</div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">WIND</div>
                <div className="detail-label">Wind Speed</div>
                <div className="detail-value">{weather.wind_speed} m/s</div>
              </div>
            </div>
          </div>
        )}

        {!weather && !loading && (
          <div className="empty-state">
            <p>Search for a city to see weather information</p>
          </div>
        )}

        <div className="demo-note">
          <strong>Demo Mode:</strong> This app shows sample weather data for demonstration.
          To use real data, add an OpenWeatherMap API key.
        </div>

        <footer className="footer">
          <p>Created by Gonçalo De Almeida</p>
          <p>
            <a href="mailto:goncalo.dealmeida.dev@gmail.com">goncalo.dealmeida.dev@gmail.com</a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
