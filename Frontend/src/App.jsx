import { useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import WeatherCard from "./Components/WeatherCard";
import ToggleMode from "./Components/ToggleMode";
import { API_URL, API_KEY } from "./config";

function App() {
  const [weather, setWeather] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const getWeather = async (city) => {
    try {
      const res = await axios.get(`${API_URL}/weather`, {
        params: { q: city, appid: API_KEY },
      });
      setWeather(res.data);
    } catch (err) {
      console.error(err);
      alert("City not found or API error. Check console for details.");
      setWeather(null);
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>🌤️ Weather Forecast</h1>
      <ToggleMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchBar onSearch={getWeather} />
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
