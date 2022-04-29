import React from 'react';

const Card = () => {
    const [weather, setWeather] = useState({})
    const [temp, setTemp] = useState(0)
    const [isFhare, setIsFhare] = useState(true)
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
   const conver = () => {
      if(isFhare){
        setTemp()
      }
   }
      
    return (
     <div className='card'>
       <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}></img>
       <h3>{weather.name} {weather.sys?.country}</h3>
       <ul>
         <li><b>clouds </b> {weather.clouds?.all}</li>
         <li><b>wind speed </b> {weather.wind?.speed}</li>
         <li><b>pressure </b> {weather.main?.pressure}</li>
         <h3>{temp}</h3>
         <button onClick={conver}>degress ºF/ºC</button>
       </ul>
     </div>
    
    );
   
};

export default Card;