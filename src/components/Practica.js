import React, { useState } from 'react';
import Quote from './quotes.json';

const Quote = () => {
    const quotes = quotes[0] 
    
    return (
        <div>
           <h1>Practica</h1>
           <h3></h3> 
    
        </div>
    );
};

export default Quote;
const [autor, setAutor] = useState(quotes[Toggle()])
document.body.style = `background : ${colors[Math.floor(Math.random() * 4)]}`
const Cambiar = () =>{
    setAutor(quotes[Toggle()]);
}     

return (
    <div>
        <h1>{autor.quote} </h1>
        <h3>{autor.author}</h3>
        <button onClick={Cambiar}>L</button>
    </div>
);
};
const Toggle = () => Math.floor(Math.random() * quotes.length)
const colors = ["#845EC2","#D65D81","#FF6F91","#FF9571"];