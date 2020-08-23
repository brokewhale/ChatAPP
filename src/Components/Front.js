import React, { useState, useEffect } from 'react';
import { SearchOutlined, NotificationsOutlined, Add } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
// import profile from '../img/profile-1.jpg';
import Minchatavater from './Minchatavater';
import Chatlist from './Chatlist';
import db from '../firebase';
import { useStateValue } from './StateProvider';


const Front = () => {
    const [rooms, setRooms] = useState([]);
    // eslint-disable-next-line
    const [{ user }, dispatch] = useStateValue();

    const createchat = () => {
        const roomName = prompt('please enter name fore chat room');
        if (roomName) {

            db.collection('rooms').add({
                name: roomName,
            })
        }
    }

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => {
            setRooms(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        });
        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <div className='front'>
            <div className="front__topbar ">
                <SearchOutlined className='searchicon' color='action' />
                <NotificationsOutlined color='action' />
                <Avatar className='logo' alt="Remy Sharp" src={user?.photoURL} />
                {/* <img src={profile} alt="profile" /> */}

            </div>

            <div className="front__intro">
                <h2>Chat</h2>
                <div className="addchat">
                    <button onClick={createchat}>Start New Chat</button>
                    <span>
                        <Add />
                    </span>
                </div>
            </div>

            <div className="front__chat">

                <div className="front__chat-introcontainer">
                    <div className="chatselect">
                        <button className='active'>Chats</button>
                        <button>Friends</button>
                        <button>Profile</button>

                    </div>

                </div>

                <div className="front__chat-search">
                    <div className="search__input">
                        <input type="text" placeholder='Search Messages or Users..' />
                    </div>
                    <div className="search__highlight">
                        <div className="highlight__content">
                            {rooms.map(room => (
                                <Minchatavater key={room.id} id={room.id}
                                    name={room.data.name}
                                />

                            ))}






                        </div>

                    </div>
                </div>

                <div className="front__chat-chatlistcon">
                    {rooms.map(room => (
                        <Chatlist key={room.id} id={room.id}
                            name={room.data.name}
                        />

                    ))}

                </div>
            </div>

        </div>
    );
};

export default Front;