import React from 'react';

const prueba = ({user}) => {
    return (
        <div>
             <ul>
                 <li>{user.name.title} {user.name.first} {user.name.last}</li>
                 <img src={user.picture.large}></img>
             </ul>
        </div>
    );
};

export default prueba;