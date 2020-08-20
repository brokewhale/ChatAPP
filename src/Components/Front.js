import React from 'react';
import { SearchOutlined, NotificationsOutlined, Add } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import profile from '../img/profile-1.jpg';
import Minchatavater from './Minchatavater';
import Chatlist from './Chatlist';

const Front = () => {
    return (
        <div className='front'>
            <div className="front__topbar ">
                <SearchOutlined className='searchicon' color='action' />
                <NotificationsOutlined color='action' />
                <Avatar className='logo' alt="Remy Sharp" src={profile} />
                {/* <img src={profile} alt="profile" /> */}

            </div>

            <div className="front__intro">
                <h2>Chat</h2>
                <div className="addchat">
                    <button>Start New Chat</button>
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
                            <Minchatavater />
                            <Minchatavater />
                            <Minchatavater />
                            <Minchatavater />
                            <Minchatavater />
                            <Minchatavater />
                            <Minchatavater />
                            <Minchatavater />
                            <Minchatavater />
                            <Minchatavater />
                            <Minchatavater />





                        </div>

                    </div>
                </div>

                <div className="front__chat-chatlistcon">
                    <Chatlist />
                    <Chatlist />
                    <Chatlist />
                    <Chatlist />
                    <Chatlist />
                    <Chatlist />
                    <Chatlist />
                    <Chatlist />

                </div>
            </div>

        </div>
    );
};

export default Front;