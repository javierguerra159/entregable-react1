import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Practica1 = () => {
   
    const [country, setCountry] = useState({})
    const [cambiar, setCabiar] = useState("demography")
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/alpha/bo')
        .then(res => setCountry(res.data[0]))
    },[])
    console.log(country);
      return (
          <div>
            <h1>{country.altSpellings[4]}</h1>
            <img src={country.flags.png}></img>
           <div>
               <button onClick={() => setCabiar("demography")}>demography</button>
               <button>location</button>
               <button>capital</button>
               {cambiar === "demography" ? (
                   
               ) : ()}
           </div>
        
            
         </div>
      );
  };
  
  export default Practica1;