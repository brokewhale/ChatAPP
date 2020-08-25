import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import { ReactComponent as Send } from '../img/send.svg';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';


import db from '../firebase';


const Mainchat = () => {
    const [input, setInput] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);
    // eslint-disable-next-line
    const [{ user }, dispatch] = useStateValue();


    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot =>
                setRoomName(snapshot.data().name)
            );

            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            })
        }

    }, [roomId])

    const sendmsg = (e) => {
        e.preventDefault();
        console.log(input);

        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput('')

    }

    return (
        <div className='mainchat'>
            <Link to='/' className="backarrow">
                <ArrowBackIcon />
            </Link>
            <div className="mainchat__header">
                <div className="header">
                    <Avatar className='header__ava' />
                    <div className="header__info">
                        <h3>{roomName} </h3>
                        <p>Hey, I am using chat <span>•</span> online</p>
                    </div>
                </div>
                <div className="low">
                    <SearchOutlinedIcon />
                    <PersonAddOutlinedIcon />
                    <MoreVertOutlinedIcon className='vat' />

                </div>
            </div>

            <div className='mainchat__msg'>
                {messages.map(message => (

                    <div key={message.message} className={`msgchat ${message.name === user.displayName && "msg__receiver"}`}>
                        {/* <h3>{message.name}</h3> */}
                        <h4>{message.name}</h4>
                        {message.message}
                        <div className="timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </div>
                    </div>
                ))}


            </div>

            <div className="mainchat__footer">
                <form >
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Enter msg' />
                    <MicIcon />
                    <button onClick={sendmsg} type='submit'><Send /></button>
                </form>
            </div>

        </div >
    );

};

export default Mainchat;