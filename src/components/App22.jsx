import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App22() {
  const [tmp, setTmp] = useState([]);

  const fetchWeather = async () => {
    const url = "http://localhost:8080/weather";
    const res = await axios(url);
    setTmp(res.data);
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  return <div style={{backgroundColor:'lightblue'}}>{tmp}</div>;
}
