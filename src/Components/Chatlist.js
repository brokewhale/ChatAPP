import React from 'react';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Chatlist = ({ name, id }) => {
    return (

        <Link to={`/rooms/${id}`}>
            <div className='chatlist'>
                <Avatar className='chatlist__ava' />
                <div className="chatlist__info">
                    <h3>{name} <span>1:30</span></h3>
                    <p>last messagesdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd....</p>
                </div>

            </div>
        </Link>
    );
};

export default Chatlist;