import React, { useState } from "react";
import axios from "axios";
import "./App.css"
// Components
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "24ab6d9a1c05d95e99b111403727eb81";

 function App() {
    const [input,setInput]=useState();
    const [data,setData]=useState();

    const  handleChange = (event) => {
    setInput( event.target.value)
    setData();
  };

  const handleClick = () => {
    axios
      .post(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          input +
          "&units=metric&appid=" +
          API_KEY
      )
      .then(res => {
        setData(res.data)
      })
      .catch(error => {
        console.log(error);
      });
  };

  
    return (
      <div className="container">
        <h1 className="header">Weather App</h1>
        <Form onChange={handleChange} onClick={handleClick} />
        {data && <Weather data={data} />}
      </div>
    );
  
}
export default  App;