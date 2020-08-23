import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';


const Login = () => {
    const [{ }, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
            // console.log(result);
        }).catch((error) => alert(error.message))
    };

    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://images.app.goo.gl/7XZn34tWZigXfTpPA" alt="chat" />

                <div className="login__text">
                    <h1>Sign in to Shigchat</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    );
};

export default Login;