import React from 'react';
import RickyUrl from './components/RickyUrl';

const ResidentsList = ({residents}) => {
console.log(residents)

    return (
        <div className='characters-container'>
          {
              residents?.map(resident =>(
                  <div>
                   <RickyUrl apiRicky={resident} key={residents.url}/>
                      
                  </div>
                  
              ))
          }
        </div>
    );
};

export default ResidentsList;