import React from 'react';
import { Avatar } from '@material-ui/core';


const Chatlist = () => {
    return (
        <div className='chatlist'>
            <Avatar className='chatlist__ava' />
            <div className="chatlist__info">
                <h3>Taye Taiwo <span>1:30</span></h3>
                <p>last messagesdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd....</p>
            </div>

        </div>
    );
};

export default Chatlist;