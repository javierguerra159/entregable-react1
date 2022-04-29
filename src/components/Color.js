import React, { useEffect, useState } from 'react';

const Color = () => {
const [color, setColor] = useState("yelow")

useEffect(() =>{

    window.addEventListener("mousemove", e => {
        if(window.innerWidth / 2 > e.x)
            setColor("yelow")
        else{
            setColor("gray")
        }
    })
},[])
   
    return (
        <div className='color-square'>
            hola soy un color
        </div>
           
    );
};

export default Color;