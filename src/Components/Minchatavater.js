import React from 'react';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';



const Minchatavater = ({ name, id }) => {
    return (
        <Link className='minavater' to={`/rooms/${id}`}>

            <Avatar className='minava' alt='dummy' />
            <p>{name}</p>

        </Link>
    );
};

export default Minchatavater;