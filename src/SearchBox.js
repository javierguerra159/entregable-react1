import React, { useState } from 'react';
import axios from 'axios';
const SearchBox = ({setRiky}) => {

const [type,setType] = useState("")

const search = () => {

    axios.get(`https://rickandmortyapi.com/api/location/${type}`)
    .then(res => setRiky(res.data))
}

//    const [ type, setType ] = useState("")
//    const search = () => {
//     axios.get(`https://rickandmortyapi.com/api/location/${type}`)
//     .then(res => setRiky(res.data))
//    }


    return (
        <div>
            
            <input type="text" onChange={e => setType(e.target.value)} value={type}></input>
            <button onClick={search}>search</button>
           {/* <input type="text" onChange={e => setType(e.target.value)} value={type}></input>
           <button onClick={search}>search</button> */}
          
        </div>
       
       
    );
};

export default SearchBox;