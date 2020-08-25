import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';



const Minchatavater = ({ name, id }) => {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    return (
        <Link className='minavater' to={`/rooms/${id}`}>

            <Avatar className='minava' alt='dummy' src={`https://avatars.dicebear.com/api/avataaars/:${seed}.svg`} />
            <p>{name}</p>

        </Link>
    );
};

export default Minchatavater;