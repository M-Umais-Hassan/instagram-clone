import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Firebase
import { auth } from '../../config';

// Images
import Mobile from '../../assets/login_mobile.PNG'
import Logo from '../../assets/logo.PNG'
import Playstore from '../../assets/login_playstore.PNG'

// Styling
import './auth.style.css';

// Icons
import { AiFillFacebook } from 'react-icons/ai';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="container">
            <div className="mobile__image__box">
                <img src={Mobile} alt="Mobile" />
            </div>
            <div className="signin__outer__box">
                <div className="signin__box">
                    <img src={Logo} alt="Logo" />
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Log In</button>
                    <div className="OR">
                        <div className="before__line"></div>
                        <p>OR</p>
                        <div className="after__line"></div>
                    </div>
                    <a>
                        <i><AiFillFacebook /></i> <span>Log in with facebook</span>
                    </a>
                    <a>Forget password?</a>
                </div>
                <div className="signup__box">
                    <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
                </div>
                <div className="playstore__image__box">
                    <p>Get the app.</p>
                    <img src={Playstore} alt="Playstore" />
                </div>
            </div>
        </div>
    )
}

export default Signin;
