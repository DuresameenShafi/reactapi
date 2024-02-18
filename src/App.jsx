import { useEffect, useState } from 'react';
import { TiWeatherCloudy } from "react-icons/ti";


function App() {
  const [result, setResult] = useState({})
  const [cityName , setCityName] = useState("")
  const [city , setCity] = useState("karachi")
  const API = {
    key: "40e2333403c4fb0914dbfbfd23a74a01",
    url: "https://api.openweathermap.org/data/2.5/weather"
  }

  const handleClick = () => {
    setCity(cityName)
  }
  useEffect(() => {
    fetch(`${API.url}?q= ${city}&appid=${API.key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setResult(data)
      }
      )
  }, [city])
  // console.log(result);


  // console.log(result.weather[0].description);
  // const {name , main} = result
  // const {temp} = main
  // console.log(name, main)
  // console.log(temp)

  return (
    <div>
      Weather
      <div>
        <input type="text" name="" id="" onChange={(e)=>{setCityName(e.target.value)}} />
        <button onClick={handleClick}>Search</button>
      </div>
      {/* <h1>{result.main && result.main.temp}</h1> */}
      {/* <h1 ><TiWeatherCloudy style={{color : "red"}}/> {result.weather[0].description}</h1> */}

    </div>
  );
}

export default App;
