import React, { useContext } from 'react';
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
import * as firebase from "firebase/app";
import "firebase/auth";
import googleIcon from '../Images/index.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(function (result) {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email }
                setLoggedInUser(signInUser)
                history.replace(from);
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <>
            
            <div className="loginpage">
            <div className="logIn">
                <div>
                    <div style={{}} className="LoginButton">
                        <img style={{ width: "25px" }} className="mr-5 ml-1" src={googleIcon} alt="" />
                        <button className="googleButton" onClick={handleGoogleSignIn}>Continue with Google</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};
export default Login;