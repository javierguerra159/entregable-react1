import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RickyUrl = ({apiRicky}) => {
    const [character,setCharacter] = useState({})
    useEffect(()=>{
        axios.get(apiRicky)
        .then(res => setCharacter(res.data))
    },[apiRicky])
    
    return (
        <div className='card' >
            
            <div className='image-container-card' >
              
                <img className='image-character' src={character.image}/>

            </div>
            <div className='card-information'>
                <h3 className='card-title' >
                    {character.name}    
                </h3>
            
                <div className='status-specie-container'>
                    <div className='circle'></div>
                    <h4 className='status-species-title'>
                        {character.status} - {character.species}
                    </h4>
                </div>
                <p className='origin-label'>origin</p>
                <h4 className='origin-name'>{character.origin?.name}</h4> 
                <p className='episode-label'>episodes where appear</p>
                <h4 className='episode-quantity'>{character.episode?.length}</h4>

            </div>
        </div>
    );
};

export default RickyUrl;