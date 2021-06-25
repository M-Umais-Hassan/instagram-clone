import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Images
import Mobile from '../../assets/login_mobile.PNG'
import Logo from '../../assets/logo.PNG'
import Playstore from '../../assets/login_playstore.PNG'

// Styling
import './auth.style.css';

// Icons
import { AiFillFacebook } from 'react-icons/ai';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        console.log(email, name, username, password);
    }

    return (
        <div className="container">
            <div className="mobile__image__box">
                <img src={Mobile} alt="Mobile" />
            </div>
            <div className="signin__outer__box">
                <div className="signin__box">
                    <img src={Logo} alt="Logo" />
                    <h2>Sign up to see photos and videos from your friends.</h2>
                    <button style={{ padding: "0" }}>
                        <i><AiFillFacebook /></i> <span>Log in with facebook</span>
                    </button>
                    <div className="OR">
                        <div className="before__line"></div>
                        <p>OR</p>
                        <div className="after__line"></div>
                    </div>
                    <input type="text" placeholder="Mobile Number or email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleSignup}>Sign up</button>
                    <p className="policy">By signing up you agree to our Terms, Data Policy and Cookies Policy</p>
                </div>
                <div className="signup__box">
                    <p>Have an account? <Link to='/login'>Log in</Link></p>
                </div>
                <div className="playstore__image__box">
                    <p>Get the app.</p>
                    <img src={Playstore} alt="Playstore" />
                </div>
            </div>
        </div>
    )
}

export default Signup;
