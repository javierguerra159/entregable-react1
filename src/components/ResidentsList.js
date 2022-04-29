import React from 'react';
import RikyUrl from './RikyUrl';

const Residentslist = ({residents}) => {
    
    console.log(residents)
    return (
        <div>
            
                {
                residents?.map(resident =>(
                     <RikyUrl rikyUrl={resident} key={resident}/>
                //    <div>
                //         {resident}
                //      </div>
                ))
                
               } 
            
        </div>
    );
};

export default Residentslist;