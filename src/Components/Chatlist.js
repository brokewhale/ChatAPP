import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import db from '../firebase';


const Chatlist = ({ name, id }) => {
    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState('')
    useEffect(() => {
        if (id) {
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            })
        }
    }, [id])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    return (

        <Link to={`/rooms/${id}`}>

            <div className='chatlist'>
                <Avatar className='chatlist__ava' src={`https://avatars.dicebear.com/api/avataaars/:${seed}.svg`} />
                <div className="chatlist__info">
                    <h3>{name} <span>-:--</span></h3>
                    <p>{messages[0]?.message}</p>
                </div>

            </div>
        </Link>
    );
};



export default Chatlist;