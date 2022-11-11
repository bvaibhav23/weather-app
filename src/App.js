import { useState } from "react";
import "./App.css";

function App() {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});
  let [getsts,setsts]=useState(false);

  const getWetherDetails = () => {
    if (!inputCity) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputCity +
      "&appid=" +
      apiKey;
    fetch(apiURL)
      .then((res) =>{ 
        
        if(!res.ok)
       {
        setsts(true)
         return res.json()
       }
       else 
        setsts(true);
    
    })
      .then((data) => setData(data))
      .catch((error)=>console.log("error", error));
      console.log( data);
      console.log(getsts)
  };

  const handleChangeInput = (e) => {
    // console.log("value", e.target.value);
    setInputCity(e.target.value);
  };

 
  return (
    <div className="container">
      <div className="form-container">
        <h1 className="heading">Weather App</h1>
        <div className="input-container">
        <label>Enter City Name</label>
        <input type="text" value={inputCity} onChange={handleChangeInput}/>
        <button onClick={getWetherDetails}>Search</button>
        </div>
      </div>

      {Object.keys(data).length > 0  && (
        <div className="weather-conatiner">
             <h2 className="head">{getsts?"Enter correct city name":(data.name).toUpperCase()}</h2>
            <h1 className="temp">
              {getsts?"":(data.main.temp - 273.15).toFixed(2)}°C
            </h1>
            <h3 className="sky">
              {getsts?"":(data.weather[0].description).toUpperCase()}
            </h3>
            <h3 className="humidity">
              {getsts?"":`Humidity:${data.main.humidity}`}
            </h3>

        </div>
      )}
    </div>
  );
}

export default App;