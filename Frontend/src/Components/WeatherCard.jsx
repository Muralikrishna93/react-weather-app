export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const {
    name,
    main: { temp, humidity },
    weather: [details],
    wind: { speed },
  } = weather;

  const celsius = Math.round(temp - 273.15);
  const windSpeedKmh = (speed * 3.6).toFixed(1);
  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{details.main} — {details.description}</p>
      <p>🌡️ {celsius}°C</p>
      <p>💧 Humidity: {humidity}%</p>
      <p>🌬️ Wind: {windSpeedKmh} km/h</p> 
    </div>
  );
}
