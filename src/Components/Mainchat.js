import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import { ReactComponent as Send } from '../img/send.svg';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from '../firebase';


const Mainchat = () => {
    const [input, setInput] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot =>
                setRoomName(snapshot.data().name)
            );
        }

    }, [roomId])

    const sendmsg = (e) => {
        e.preventDefault();
        console.log(input);
        setInput('')

    }

    return (
        <div className='mainchat'>
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
                <div className="msgchat ">
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Eum, hic?Lorem ipsum
                    <div className="timestamp">
                        10:40PM
                    </div>
                </div>

                <div className="msgchat msg__receiver">
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Eum, hic?Lorem ipsum
                    <div className="timestamp">
                        10:40PM
                    </div>
                </div>
                <div className="msgchat msg__receiver">
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Eum, hic?Lorem ipsum
                    <div className="timestamp">
                        10:40PM
                    </div>
                </div>
                <div className="msgchat ">
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Eum, hic?Lorem ipsum
                    <div className="timestamp">
                        10:40PM
                    </div>
                </div>

                <div className="msgchat msg__receiver">
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Eum, hic?Lorem ipsum
                    <div className="timestamp">
                        10:40PM
                    </div>
                </div>
                <div className="msgchat ">
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Eum, hic?Lorem ipsum
                    <div className="timestamp">
                        10:40PM
                    </div>
                </div>
            </div>

            <div className="mainchat__footer">
                <form >
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Enter msg' />
                    <MicIcon />
                    <button onClick={sendmsg} type='submit'><Send /></button>
                </form>
            </div>

        </div>
    );

};

export default Mainchat;