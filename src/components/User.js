import React from 'react';
import users from './users.json';
import { useState } from 'react';

const User = () => {
    const [usuario, setUsuario] = useState(users[Toggle()])
    document.body.style=`background : ${colors[Math.floor(Math.random() * 4)]}`
    
    const Cambiar = () =>{
        setUsuario(users[Toggle()])
    
    }
    
     return (
        <div className='card'>
            
            <h1>{usuario.name.title} {usuario.name.first} {usuario.name.last}</h1>
            <img src={usuario.picture.large}></img>
            <ul>
                <li>{usuario.email}</li>
                <li>{usuario.phone}</li>
                <li>{usuario.location.country}</li>
            </ul>
            <button onClick={()=> Cambiar()}>C</button>
        </div>
    );
};
const Toggle = () => Math.floor(Math.random() * users.length)
const colors = ["#845EC2","#D65D81","#FF6F91","#FF9571"];
export default User;