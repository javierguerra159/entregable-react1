import axios from 'axios';
import React, { useEffect, useState } from 'react';


const RikyUrl = ({rikyUrl}) => {

const [character, setCharacter] = useState({})

useEffect(() => {
    axios.get(rikyUrl)
    .then(res => setCharacter(res.data))
},[rikyUrl])
console.log(character)
    return (
        <div>
            <h3>{character?.name}</h3>
        
            <img src={character?.image}></img>
            
        </div>
    );
};

export default RikyUrl;