import { useState } from "react";
export default function Weather() {
  let [city, setCity] = useState("");
  let [weatherData, setweatherData] = useState(null);

  let changeCity = (event) => {
    setCity(event.target.value);
  };

  let getWeather = async () => {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2481857e80f1f8c79914c9b3953c4a8&units=metric`;
    console.log(city);

    try {
      let response = await fetch(URL);
      let data = await response.json();
      setweatherData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  let getCity = () => {
    getWeather();
  };
  let clear = () => {
    setCity("");
    setweatherData(null);
  };

  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="ENTER THE CITY"
        value={city}
        onChange={changeCity}
      />

      <button className="weather-container button" onClick={getCity}>
        GET WEATHER
      </button>

      {weatherData && weatherData.main && (
        <div>
          <h1 className="weather-container h1">City:{weatherData.name}</h1>
          <p className="weather-container p">
            Tempreture :{weatherData.main.temp}°C{" "}
          </p>
          <h1 className="weather-container h1">
            {weatherData.weather[0].description}
          </h1>
          <button className="weather-container button" onClick={clear}>
            ClEAR
          </button>
        </div>
      )}
    </div>
  );
}
