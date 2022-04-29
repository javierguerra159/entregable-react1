
import axios from 'axios';
import { useState, useEffect } from 'react';
const Apis = () => {
    const [people, setPeople] = useState({})
    
    useEffect(() =>{
        axios.get('https://randomuser.me/api/')
        .then(res => setPeople(res.data.results[0]))
    },[])
    const cambiar = () =>{
        axios.get('https://randomuser.me/api/')
        .then(res => setPeople(res.data.results[0]))   
    }
        console.log(cambiar);
    return (
        <div>
            <h1>{people.name?.title} {people.name?.first} {people.name?.last}</h1>
            <img src={people.picture?.large}></img>
            <p>{people.email}</p>
            <p>{people.location?.country} {people.location?.state} {people.location?.city} </p>
            <button onClick={cambiar}>cambiar</button>
        </div>
    );
};

export default Apis;