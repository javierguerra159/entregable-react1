import React, { useState } from 'react';
import quotes from './quotes.json'


const getRandom = () => Math.floor(Math.random() * quotes.length)
const colors = ["#845EC2","#D65D81","#FF6F91","#FF9571"];

const QuoteBox = () => {
    
    const [author, setAuthor] = useState(quotes[getRandom()])
   
   
    const change = () => {
        const random = getRandom()
        setAuthor(quotes[random])
            
    }
    const color = colors[Math.floor(Math.random() * 4)]

    document.body.style =`background: ${color}`
    return (
        <div className='card' style={{color : color}}>
            <ul>
                <li>
                    <h1> <i className="fa-solid fa-quote-left"></i>{author.quote}</h1>          
                </li>
                <li>
                    <h3>{author.author}</h3>
                </li>
                <li>
                    <button onClick={change} style={{color : color}}><i className="fa-solid fa-angles-right" ></i></button>
                </li>
            </ul>
          
          
        </div>
    );
};
export default QuoteBox;