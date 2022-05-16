
import axios from 'axios';
import React, { useEffect, useState } from 'react';



const SearchBox = ({setRiky}) => {
     const [type, setType] = useState("")

     useEffect(() => {
         axios.get(`https://rickandmortyapi.com/api/location/${type}`)
         .then(res => setRiky(res.data))
     },[])
     const change = () =>{
        axios.get(`https://rickandmortyapi.com/api/location/${type}`)
        .then(res => setRiky(res.data))
     }
     return (
        <div className='search'> 
           
           <div className='input'>
                <input 
                    type="text" className='input-text'
                    onChange={e => setType(e.target.value)}
                    value={type}
                />

           </div>
           
           <button onClick={change}>search</button>
            
        </div>
    );
};

export default SearchBox;