import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBox from '../SearchBox';
import RikyUrl from './RikyUrl';
// import Residentslist from './ResidentsList';

const LocationInfo = () => {
    const[ riky, setRiky] = useState({})

   useEffect(() => {
    const ramdon = Math.floor(Math.random() *126)
    axios.get(`https://rickandmortyapi.com/api/location/${ramdon}`)
    .then(res => setRiky(res.data))
   },[])
// const [riky, setRiky] = useState({})
// useEffect(() => {

//     const ramdon = Math.floor(Math.random() * 126)
// axios.get(`https://rickandmortyapi.com/api/location/${ramdon}`)
// .then(res => setRiky(res.data))


// },[])
// console.log(riky)

    return (
        <div>
           <header>
               
           <h1>
                {riky.name}
            </h1>
           </header>
                
           
            <SearchBox setRiky={setRiky}/>
            
             <ul>
                 <li className='card'>
                     <b>dimension: </b>{riky.dimension}
                 </li>
                 <li className='card'>
                     <b>type: </b>{riky.type}
                 </li>
                 <li className='card'>
                     <b>population: </b>{riky.residents?.length}
                 </li>
             </ul>
             <RikyUrl rikyUrl={riky.residents}/>
               
        </div>
        
    );
};

export default LocationInfo;