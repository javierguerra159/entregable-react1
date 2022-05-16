import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentsList from '../ResidentsList';

import SearchBox from './SearchBox';


const LocationInfo = () => {
    const[ riky, setRiky] = useState({})

   useEffect(() => {
    const ramdon = Math.floor(Math.random() *126)
    axios.get(`https://rickandmortyapi.com/api/location/${ramdon}`)
    .then(res => setRiky(res.data))
   },[])

   return (
        <div>
           <header id='header'>
               <div id='logo'> </div>
               <h1>
                    {riky.name}
               </h1>
            </header>
         <div className='list-flex'>
                 <div className='card-location'>
                     <b>dimension: </b>{riky.dimension}
                 </div>
                 <div className='card-location'>
                     <b>type: </b>{riky.type}
                 </div>
                 <div className='card-location'>
                     <b>population: </b>{riky.residents?.length}
                 </div>
             </div>
             <div>
                 
             </div>
             <SearchBox setRiky={setRiky}/>
             <ResidentsList residents={riky.residents}/>
        </div>
        
    );
};

export default LocationInfo;