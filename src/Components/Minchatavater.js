import React from 'react';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';



const Minchatavater = ({ name, id }) => {
    return (
        <Link to={`/rooms/${id}`}>
            <div className='minavater'>
                <Avatar className='minava' alt='dummy' />
                <p>{name}</p>
            </div>
        </Link>
    );
};

export default Minchatavater;