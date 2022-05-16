import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Climate = () => {
    const [weather, setWeather] = useState({})
    const [temp, setTemp] = useState(0)
    const [isCel, setIsCel] = useState(true)

      useEffect(() =>{
        const success = pos => {
      
          const latitude = pos.coords.latitude;
        
        const longitude = pos.coords.longitude;
        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4a56ff9734c9b8d960818ce6f8fa3662`)
        .then(res =>{
          setWeather(res.data);
          setTemp(res.data.main.temp);
          
        }); 
        }
    navigator.geolocation.getCurrentPosition(success);
     },[]) 
     console.log(weather)
   const convert = () => {
    if(isCel){
        setTemp((temp - 273) * 1,8 + 32)
        setIsCel(false)
    }else{
        setTemp((temp - 32 / 1,8))
        setIsCel(true)
    }
   }
       return (
     <div className='card'>
      
       <div className='todo'>

          <h1>Weather App</h1>
          <h3>{weather.name} {weather.sys?.country}</h3>
          
         <div className='image'>
          
            <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}></img>
          
            <ul>
                <li><b>clouds </b> {weather.clouds?.all}</li>
                <li><b>wind speed </b> {weather.wind?.speed}</li>
                <li><b>pressure </b> {weather.main?.pressure}</li>
            </ul>
         </div>

          <h3>{temp}</h3>
          <button onClick={convert}>degress ºF/ºC</button>
          <h2>ggg</h2>
        
        
       </div>
     </div>

        




 );
};

export default Climate;