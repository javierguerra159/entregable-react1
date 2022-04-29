import React, { useEffect, useState } from 'react';

const SearchBox = () => {
    const [type, setType] = useState("")

    useEffect(() =>{

        axios.get(`https://rickandmortyapi.com/api/location/${type}`)
        .then(res => setRiky(res.data))
    },[])
    return (
        <div>
            <input 
                type="text" 
                onChange={e => setType(e.target.value)}
                value={type}
            />
            <button>search</button>
        </div>
    );
};

export default SearchBox;